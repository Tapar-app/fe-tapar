import { Suspense } from 'react';

import HomeClient from '@/components/HomeClient';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center md:h-[calc(100vh-200px)] h-[calc(100vh-250px)] space-y-10'>
      <Suspense>
        <HomeClient />
      </Suspense>
    </main>
  );
}
