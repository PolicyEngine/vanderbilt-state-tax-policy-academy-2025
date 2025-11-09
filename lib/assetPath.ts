// Utility to get asset path with basePath for production builds
export function assetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production'
    ? '/policyengine-uk-event-2025'
    : '';
  return `${basePath}${path}`;
}
