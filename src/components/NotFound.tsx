import Image from 'next/image';
import Link from 'next/link';

function ItemsNotFound() {
  return (
    <div className={'flex flex-col w-full items-center mt-[50px] '}>
      <h2 className={'font-semibold text-[32px]'}>Məlumat tapılmadı :(</h2>
      <Image
        src={'/not-found.png'}
        alt={'Not found'}
        width={375}
        height={282}
      />
      <Link href={'/'} className={'text-[#F5A630] underline text-[14px]'}>
        Ana səhifəyə qayıt
      </Link>
    </div>
  );
}

export default ItemsNotFound;
