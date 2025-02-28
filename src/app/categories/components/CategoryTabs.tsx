'use client';
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { ShoppingCenterApi } from '@/lib/api/shopping-center.api';
import Loading from '@/components/Loading';

interface MainTabsProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const CategoryTabs: React.FC<MainTabsProps> = ({ activeTab, setActiveTab }) => {
  const params = useSearchParams();
  const router = useRouter();

  const {
    data: shoppingCenters,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['shopping-centers'],
    queryFn: ShoppingCenterApi.getAll,
  });

  useEffect(() => {
    if (shoppingCenters?.data?.object?.length) {
      const defaultTab = params.get('shoppingCenterId')
        ? parseInt(params.get('shoppingCenterId') as string, 10)
        : shoppingCenters.data.object[0]?.id;

      setActiveTab(defaultTab);
    }
  }, [params, shoppingCenters, setActiveTab]);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    router.push(`/categories?shoppingCenterId=${tabId}`, { scroll: false }); // Updating URL
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading shopping centers.</div>;

  return (
    <div className='bg-[#F3F3F3] p-[8px] rounded-2xl'>
      <div className='flex'>
        {shoppingCenters?.data?.object?.map((bazaar: any) => (
          <button
            key={bazaar.id}
            className={`font-[700] ${
              activeTab === bazaar.id ? 'text-black bg-white' : 'text-[#8E8E8E]'
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

export default CategoryTabs;
