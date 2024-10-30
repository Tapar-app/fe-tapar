import Image from "next/image";
function BannerMobile() {
  return (
    <div className="relative">
      <div className="relative w-[330px] h-[224px] bannerMob">
        <Image
          src="/BannerMob.gif"
          alt="Mobile Banner"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default BannerMobile;
