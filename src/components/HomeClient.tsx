'use client';
import React, { Suspense } from 'react';

import MainTabs from './MainTabs';
import SocialMedia from './SocialMedia';
import PopularProducts from './PopularProducts';

const HomeClient: React.FC = () => {
  return (
    <div className='flex flex-col items-center md:min-h-[91vh] min-h-[78vh] w-full pl-[30px] pr-[30px] pt-[26px] pb-[26px]'>
      <div className='relative w-full flex justify-center md:justify-start md:mt-12 space-y-20'>
        <Suspense>
          <MainTabs />
        </Suspense>
      </div>

      <PopularProducts />

      <div className='md:hidden sm:flex-inline flex-inline mt-4 sm:mt-4'>
        <SocialMedia />
      </div>
    </div>
  );
};

export default HomeClient;
