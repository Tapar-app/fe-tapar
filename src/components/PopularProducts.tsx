import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { CategoryApi } from '@/lib/api/category.api';
import { useShoppingCenterStore } from '@/store/shopping-center-store';
import CategoryDetail from './CategoryDetail';

function PopularProducts() {
  const { shoppingCenterId } = useShoppingCenterStore();

  const { data: popularCategories } = useQuery({
    queryKey: ['popular-categories', shoppingCenterId],
    queryFn: () => CategoryApi.getPopularCategories(shoppingCenterId),
    enabled: !!shoppingCenterId,
  });

  return (
    <div className='w-full my-6'>
      <h1 className='text-3xl font-semibold mb-3'>Ən popular məhsullar</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-3'>
        {popularCategories?.data?.object.map((category) => (
          <CategoryDetail categoryData={category} />
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
