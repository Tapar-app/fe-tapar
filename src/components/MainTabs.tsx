'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

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
    <div className='flex space-x-4 p-4 bg-gray-100 rounded-lg'>
      {shoppingCenters?.data?.object?.map((bazaar: any) => (
        <button
          key={bazaar.id}
          className={`flex items-center justify-center px-4 py-2 rounded-lg ${
            shoppingCenterId === bazaar.id
              ? 'bg-white text-black shadow-md'
              : ''
          } transition-colors duration-200 flex-1`}
          onClick={() => handleTabClick(bazaar.id)}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_STATIC_URL}/${bazaar.icon}`}
            alt='logo'
            width={40} // Adjust based on your logo size
            height={40} // Adjust based on your logo size
            className='mr-2'
          />
          <span className='font-semibold'>{bazaar.name}</span>
        </button>
      ))}
    </div>
  );
};

export default MainTabs;
