import Image from "next/image";
function BannerMobile() {
  return (
    <div className="relative pt-5">
      <div className="relative w-[330px] h-[224px] bannerMob">
        <Image
          src="https://static.tapar.az/images/BannerMob.svg"
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
