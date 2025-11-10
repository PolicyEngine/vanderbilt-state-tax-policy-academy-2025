'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/vanderbilt-2025');
  }, [router]);

  return (
    <main className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-white text-2xl">
        Loading presentation...
      </div>
    </main>
  );
}
