import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PolicyEngine Event 2025 - Slides',
  description: 'PolicyEngine 2.0 and the Future of Public Policy Analysis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
