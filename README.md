# Vanderbilt State Tax Policy Academy 2025

PolicyEngine presentation for the Vanderbilt Prenatal-to-3 Policy Impact Center's State Tax Policy Academy.

## Presentation

**Title**: Modeling State Tax Policy with PolicyEngine
**Speaker**: Max Ghenis
**Duration**: 45 minutes

### Topics Covered

- Introduction to PolicyEngine
- State tax policy modeling capabilities
- Analyzing state EITCs, CTCs, and child and dependent care tax credits
- Measuring impacts on household resources, budgets, poverty, and inequality
- Hands-on demonstration of the web app

## Viewing the Slides

Visit: https://policyengine.github.io/vanderbilt-state-tax-policy-academy-2025

## Development

### Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the slides.

### Building for Production

```bash
npm run build
```

Output will be in the `out/` directory.

### Adding Slides

See `CLAUDE.md` for detailed instructions on creating and editing slides with Claude Code.

## Project Structure

```
├── app/                          # Next.js app directory
│   ├── [slideshow]/page.tsx     # Dynamic slideshow viewer
│   ├── page.tsx                 # Menu page
│   └── layout.tsx
├── components/                   # Shared slide components
│   ├── Slide.tsx
│   ├── SlideTitle.tsx
│   └── SlideContent.tsx
├── slideshows/                  # Presentations
│   └── vanderbilt-2025/
│       ├── config.ts            # Slideshow configuration
│       └── slides/              # Individual slide components
├── lib/                         # Utilities
│   ├── slideshows.ts           # Slideshow registry
│   └── types.ts                # TypeScript types
└── public/
    └── logos/                   # Logo files
```

## Deployment

The slides are automatically deployed to GitHub Pages when changes are pushed to the main branch.

