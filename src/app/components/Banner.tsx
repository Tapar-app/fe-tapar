import Image from "next/image";
function Banner() {
  return (
    <div className="absolute md:top-[250px] lg:top-[350px] xl:top-[130px] 2xl:top-[140px]">
      <div className="relative w-[330px] h-[224px] md:w-[600px] md:h-[117px] lg:w-[681px] lg:h-[117px]">
        <Image src="/Banner.svg" alt="Banner" fill className="object-contain" />
      </div>
    </div>
  );
}

export default Banner;
