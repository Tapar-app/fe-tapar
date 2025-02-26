'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { ShoppingCenterApi } from '@/lib/api/shopping-center.api';
import { useShoppingCenterStore } from '@/store/shopping-center-store';

import Loading from './Loading';

const MainTabs: React.FC = () => {
  const params = useSearchParams();
  const { shoppingCenterId, setShoppingCenterId } = useShoppingCenterStore();

  const {
    data: shoppingCenters,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['shopping-centers'],
    queryFn: ShoppingCenterApi.getAll,
  });

  // On first load, set the default tab
  useEffect(() => {
    if (shoppingCenters?.data?.object?.length) {
      const defaultTab = params.get('shoppingCenterId')
        ? parseInt(params.get('shoppingCenterId') as string, 10)
        : shoppingCenters.data.object[0]?.id;

      setShoppingCenterId(defaultTab);
    }
  }, [params, shoppingCenters, setShoppingCenterId]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading shopping centers.</div>;

  const handleTabClick = (tabId: number) => {
    // Update Zustand state without redirecting
    setShoppingCenterId(tabId);
  };

  return (
    <div className='bg-[#F3F3F3] p-[8px] rounded-2xl'>
      <div className='flex'>
        {shoppingCenters?.data?.object?.map((bazaar: any) => (
          <button
            key={bazaar.id}
            className={`font-[700] ${
              shoppingCenterId === bazaar.id
                ? 'text-black bg-white'
                : 'text-[#8E8E8E]'
            } p-2 rounded-lg`}
            onClick={() => handleTabClick(bazaar.id)}
          >
            {bazaar.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainTabs;
