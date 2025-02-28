import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';

const CategoryClient = dynamic(() => import('./components/CategoryClient'), {
  ssr: false,
});

export default function CategoryPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryClient />
      </Suspense>
    </div>
  );
}
