'use client';

import Link from 'next/link';

import { Icons } from '@/components/icons';
import { useShoppingCenterStore } from '@/store/shopping-center-store';

import SocialMedia from '../SocialMedia';

export default function Header() {
  const { shoppingCenterId } = useShoppingCenterStore();

  return (
    <header className='z-10 sticky top-0 md:pl-[50px] md:pr-[50px] sm:pl-[30px] sm:pr-[30px] pl-[30px] pr-[30px] pt-[26px] pb-[26px] h-[100px] w-full bg-white'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center w-full sm:justify-between justify-between md:justify-normal gap-x-0 sm:gap-x-0 md:gap-x-[30px]'>
          <Link href='/'>
            <Icons.logo />
          </Link>
          <Link
            href={`/categories?shoppingCenterId=${shoppingCenterId}`}
            className='bg-[#FAFAFA] rounded-[10px] py-2 sm:py-3 px-3 sm:px-5 text-[14px]'
          >
            Bütün kateqoriyalar
          </Link>
        </div>

        <div className='md:flex sm:hidden hidden'>
          <SocialMedia />
        </div>
      </div>
    </header>
  );
}
