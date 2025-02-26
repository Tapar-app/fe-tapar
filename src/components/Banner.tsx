import Image from 'next/image';

function Banner() {
  return (
    <div className='absolute'>
      <div className='relative w-[330px] h-[224px] md:w-[600px] md:h-[117px] lg:w-[681px] lg:h-[117px] lg:mt-2 xl:mt-0 banner'>
        <Image
          src='/Banner.gif'
          alt='Banner'
          fill
          className='object-contain'
          priority
        />
      </div>
    </div>
  );
}

export default Banner;
