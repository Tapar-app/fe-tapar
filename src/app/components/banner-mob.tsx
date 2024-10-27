import Image from "next/image";
function BannerMobile() {
  return (
    <div className="relative">
      <div className="relative w-[330px] h-[224px]">
        <Image
          src="/BannerMob.svg"
          alt="Mobile Banner"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default BannerMobile;
