'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { assetPath } from '@/lib/assetPath';

interface ConstituencyData {
  scenario: string;
  constituency_code: string;
  constituency_name: string;
  average_gain: number;
}

const SCENARIOS = {
  'raise_basic_rate_1p': 'Raise basic rate by 1p',
  'raise_higher_rate_1p': 'Raise higher rate by 1p',
  'remove_2_child_limit': 'Remove 2-child limit',
};

export default function ConstituencyMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedScenario, setSelectedScenario] = useState<string>('raise_basic_rate_1p');
  const [selectedConstituency, setSelectedConstituency] = useState<ConstituencyData | null>(null);
  const [data, setData] = useState<ConstituencyData[]>([]);
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ConstituencyData[]>([]);

  // Load data
  useEffect(() => {
    Promise.all([
      fetch(assetPath('/data/scenario_gains_by_constituency.csv')).then(r => r.text()),
      fetch(assetPath('/data/uk_constituencies_2024.geojson')).then(r => r.json())
    ]).then(([csvText, geojson]) => {
      // Parse CSV with proper handling of quoted fields
      const parseCSVLine = (line: string): string[] => {
        const result = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
          } else {
            current += char;
          }
        }
        result.push(current.trim());
        return result;
      };

      const lines = csvText.split('\n');
      const parsedData = lines.slice(1)
        .filter(line => line.trim())
        .map(line => {
          const values = parseCSVLine(line);
          return {
            scenario: values[0]?.trim(),
            constituency_code: values[1]?.trim(),
            constituency_name: values[2]?.trim().replace(/^"|"$/g, ''), // Remove surrounding quotes
            average_gain: parseFloat(values[3]),
          };
        });

      console.log('Parsed data sample:', parsedData.slice(0, 5));
      console.log('Total scenarios in CSV:', parsedData.length / 3); // 3 scenarios
      console.log('GeoJSON sample:', geojson.features.slice(0, 5).map((f: any) => f.properties.Name));
      console.log('Total features in GeoJSON:', geojson.features.length);

      // Check for code mismatches
      const csvCodes = new Set(parsedData.map(d => d.constituency_code));
      const geoCodes = geojson.features.map((f: any) => f.properties.GSScode);
      const mismatches = geoCodes.filter((code: string) => !csvCodes.has(code));
      console.log('Total constituencies in GeoJSON not in CSV:', mismatches.length);
      console.log('Unmatched codes:', mismatches);

      // Also check reverse - CSV codes not in GeoJSON
      const geoCodesSet = new Set(geoCodes);
      const csvOnlyCodes = Array.from(csvCodes).filter(code => !geoCodesSet.has(code));
      console.log('Total constituencies in CSV not in GeoJSON:', csvOnlyCodes.length);

      // Count matches
      const matches = geoCodes.filter((code: string) => csvCodes.has(code));
      console.log('Successfully matched constituencies:', matches.length);

      setData(parsedData);
      setGeoData(geojson);
      setLoading(false);
    });
  }, []);

  // Render map
  useEffect(() => {
    if (!svgRef.current || !geoData || !data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 950;
    const height = 550;

    const g = svg.append('g');

    // Get bounds of the British National Grid coordinates
    const bounds = {
      xMin: Infinity,
      xMax: -Infinity,
      yMin: Infinity,
      yMax: -Infinity
    };

    geoData.features.forEach((feature: any) => {
      const coords = feature.geometry?.coordinates;
      if (!coords) return;

      const traverse = (c: any) => {
        if (typeof c[0] === 'number') {
          bounds.xMin = Math.min(bounds.xMin, c[0]);
          bounds.xMax = Math.max(bounds.xMax, c[0]);
          bounds.yMin = Math.min(bounds.yMin, c[1]);
          bounds.yMax = Math.max(bounds.yMax, c[1]);
        } else {
          c.forEach(traverse);
        }
      };
      traverse(coords);
    });

    // Create scale to fit British National Grid coordinates into SVG
    const padding = 20;
    const dataWidth = bounds.xMax - bounds.xMin;
    const dataHeight = bounds.yMax - bounds.yMin;
    const scale = Math.min((width - 2 * padding) / dataWidth, (height - 2 * padding) / dataHeight);

    // Calculate centering offsets
    const scaledWidth = dataWidth * scale;
    const scaledHeight = dataHeight * scale;
    const offsetX = (width - scaledWidth) / 2;
    const offsetY = (height - scaledHeight) / 2;

    const projection = d3.geoTransform({
      point: function(x, y) {
        // Transform British National Grid to SVG coordinates
        // Note: flip y because SVG y increases downward
        this.stream.point(
          (x - bounds.xMin) * scale + offsetX,
          height - ((y - bounds.yMin) * scale + offsetY)
        );
      }
    });

    const path = d3.geoPath().projection(projection);

    // Filter data for current scenario
    const scenarioData = data.filter(d => d.scenario === selectedScenario);
    // Map by constituency code
    const dataMap = new Map(scenarioData.map(d => [d.constituency_code, d]));

    // Color scale - diverging with white at 0, red for losses, green for gains
    const extent = d3.extent(scenarioData, d => d.average_gain) as [number, number];
    const maxAbsValue = Math.max(Math.abs(extent[0]), Math.abs(extent[1]));

    const colorScale = d3.scaleDiverging<string>()
      .domain([-maxAbsValue, 0, maxAbsValue])
      .interpolator(d3.interpolateRdYlGn);

    console.log('Data extent:', extent);
    console.log('Max absolute value:', maxAbsValue);
    console.log('Number of constituencies with data:', scenarioData.length);
    console.log('Sample constituency:', scenarioData[0]);

    // Draw constituencies
    g.selectAll('path')
      .data(geoData.features)
      .join('path')
      .attr('d', path as any)
      .attr('fill', (d: any) => {
        const constData = dataMap.get(d.properties.GSScode);
        return constData ? colorScale(constData.average_gain) : '#ddd';
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.05)
      .attr('class', 'constituency-path')
      .style('cursor', 'pointer')
      .on('click', function(event, d: any) {
        event.stopPropagation(); // Prevent slide navigation

        const constData = dataMap.get(d.properties.GSScode);
        console.log('Clicked constituency:', d.properties.Name, 'Code:', d.properties.GSScode, 'Data:', constData);

        if (constData) {
          // Update styling for all paths
          svg.selectAll('.constituency-path')
            .attr('stroke', '#fff')
            .attr('stroke-width', 0.05);

          // Highlight selected constituency
          d3.select(this)
            .attr('stroke', '#1D4044')
            .attr('stroke-width', 0.6);

          setSelectedConstituency(constData);

          // Zoom to constituency
          const bounds = path.bounds(d);
          const dx = bounds[1][0] - bounds[0][0];
          const dy = bounds[1][1] - bounds[0][1];
          const x = (bounds[0][0] + bounds[1][0]) / 2;
          const y = (bounds[0][1] + bounds[1][1]) / 2;
          const scale = Math.min(8, 0.9 / Math.max(dx / width, dy / height));
          const translate = [width / 2 - scale * x, height / 2 - scale * y];

          g.transition()
            .duration(750)
            .attr('transform', `translate(${translate})scale(${scale})`);
        }
      })
      .on('mouseover', function(_event, _d: any) {
        const currentStrokeWidth = d3.select(this).attr('stroke-width');
        // Only change if not already highlighted (selected has 0.6)
        if (currentStrokeWidth === '0.05') {
          d3.select(this)
            .attr('stroke', '#666')
            .attr('stroke-width', 0.3);
        }
      })
      .on('mouseout', function(_event, _d: any) {
        const currentStrokeWidth = d3.select(this).attr('stroke-width');
        // Only reset if not highlighted
        if (currentStrokeWidth !== '0.6') {
          d3.select(this)
            .attr('stroke', '#fff')
            .attr('stroke-width', 0.05);
        }
      });

    // Zoom behavior - disable mouse panning to prevent interference with clicks
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .filter((event) => {
        // Disable all mouse interactions - only allow programmatic zoom
        return false;
      })
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom as any);

    // Reset zoom button
    const resetZoom = () => {
      svg.transition()
        .duration(750)
        .call(zoom.transform as any, d3.zoomIdentity);
      setSelectedConstituency(null);
    };

    // Add reset button listener
    (window as any).resetConstituencyZoom = resetZoom;

  }, [geoData, data]);

  // Update colors when scenario changes (without re-rendering whole map)
  useEffect(() => {
    if (!svgRef.current || !geoData || !data.length) return;

    const svg = d3.select(svgRef.current);
    const scenarioData = data.filter(d => d.scenario === selectedScenario);
    const dataMap = new Map(scenarioData.map(d => [d.constituency_code, d]));

    // Color scale
    const extent = d3.extent(scenarioData, d => d.average_gain) as [number, number];
    const maxAbsValue = Math.max(Math.abs(extent[0]), Math.abs(extent[1]));
    const colorScale = d3.scaleDiverging<string>()
      .domain([-maxAbsValue, 0, maxAbsValue])
      .interpolator(d3.interpolateRdYlGn);

    // Update fill colors with transition
    svg.selectAll('.constituency-path')
      .transition()
      .duration(500)
      .attr('fill', (d: any) => {
        const constData = dataMap.get(d.properties.GSScode);
        return constData ? colorScale(constData.average_gain) : '#ddd';
      });

  }, [selectedScenario, data, geoData]);

  // Update selected constituency data when scenario changes
  useEffect(() => {
    if (!selectedConstituency || !data.length) return;

    const scenarioData = data.filter(d => d.scenario === selectedScenario);
    const dataMap = new Map(scenarioData.map(d => [d.constituency_code, d]));
    const newData = dataMap.get(selectedConstituency.constituency_code);

    if (newData) {
      setSelectedConstituency(newData);
    }
  }, [selectedScenario, data]);

  // Prevent F key from triggering fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        e.stopPropagation();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim() || !data.length) {
      setSearchResults([]);
      return;
    }

    const scenarioData = data.filter(d => d.scenario === selectedScenario);
    const query = searchQuery.toLowerCase();
    const results = scenarioData.filter(d =>
      d.constituency_name.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results

    setSearchResults(results);
  }, [searchQuery, data, selectedScenario]);

  const selectConstituency = (constData: ConstituencyData) => {
    setSelectedConstituency(constData);
    setSearchQuery('');
    setSearchResults([]);

    // Find the feature in geoData and zoom to it
    if (!geoData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = svg.select('g');

    // Update styling for all paths
    svg.selectAll('.constituency-path')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.05);

    // Highlight selected constituency and get its bounds
    const selectedPath = svg.selectAll('.constituency-path')
      .filter((d: any) => d.properties.GSScode === constData.constituency_code);

    selectedPath
      .attr('stroke', '#1D4044')
      .attr('stroke-width', 0.6);

    // Get the bounding box of the selected path
    const pathNode = selectedPath.node() as SVGPathElement;
    if (!pathNode) return;

    const bbox = pathNode.getBBox();
    const dx = bbox.width;
    const dy = bbox.height;
    const x = bbox.x + bbox.width / 2;
    const y = bbox.y + bbox.height / 2;
    const scale = Math.min(8, 0.9 / Math.max(dx / 950, dy / 550));
    const translate = [950 / 2 - scale * x, 550 / 2 - scale * y];

    g.transition()
      .duration(750)
      .attr('transform', `translate(${translate})scale(${scale})`);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-full text-2xl">Loading map...</div>;
  }

  return (
    <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
      <div className="flex-1">
        <svg
          ref={svgRef}
          width="950"
          height="550"
        />
      </div>

      <div className="w-72 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pe-dark">Search constituency</h3>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                e.stopPropagation();
                setSearchQuery(e.target.value);
              }}
              onClick={(e) => e.stopPropagation()}
              placeholder="Type to search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pe-teal"
            />
            {searchResults.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.constituency_code}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectConstituency(result);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium">{result.constituency_name}</div>
                    <div className="text-xs text-gray-600">
                      £{result.average_gain.toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-pe-dark">Select policy</h3>
          <div className="space-y-2">
            {Object.entries(SCENARIOS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedScenario(key);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  selectedScenario === key
                    ? 'bg-pe-teal text-white font-semibold'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 p-4 bg-pe-dark/5 rounded-lg min-h-[120px]">
          {selectedConstituency ? (
            <>
              <h3 className="text-lg font-semibold text-pe-dark mb-2">
                {selectedConstituency.constituency_name}
              </h3>
              <p className="text-2xl font-bold transition-all duration-300" style={{
                color: selectedConstituency.average_gain >= 0 ? '#16a34a' : '#dc2626'
              }}>
                £{selectedConstituency.average_gain.toFixed(2)}
              </p>
              <p className="text-xs text-gray-600 mt-1">Average gain per household</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  (window as any).resetConstituencyZoom?.();
                }}
                className="mt-3 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                Reset zoom
              </button>
            </>
          ) : (
            <p className="text-gray-500 text-sm">Click a constituency to see details</p>
          )}</div>

        <div className="mt-auto">
          <h4 className="text-sm font-semibold mb-2 text-gray-700">Legend</h4>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-full h-3 rounded" style={{
              background: 'linear-gradient(to right, #d73027, #ffffbf, #1a9850)'
            }} />
          </div>
          <div className="flex justify-between text-xs mt-1 text-gray-600">
            <span>Loss</span>
            <span className="text-gray-400">£0</span>
            <span>Gain</span>
          </div>
        </div>
      </div>
    </div>
  );
}
