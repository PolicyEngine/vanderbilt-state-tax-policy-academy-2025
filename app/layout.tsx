import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modeling State Tax Policy with PolicyEngine',
  description: 'Learn how to model and measure the impact of state tax policies using PolicyEngine - State Tax Policy Academy 2025',
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
