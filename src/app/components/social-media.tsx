import Link from "next/link";
import React from "react";
import Image from "next/image";
function SocialMedia() {
  const openEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "mailto:info.taparaz@gmail.com";
  };

  const handleInstagramClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const instagramAppUrl = "instagram://user?username=tapar_az";
    const instagramWebUrl =
      "https://www.instagram.com/tapar_az?igsh=Ym4yYXpoN3lvd3Js";

    if (isMobile) {
      window.location.href = instagramAppUrl;
    } else {
      window.location.href = instagramWebUrl;
    }
  };

  const handleTikTokClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const tiktokAppUrl = "tiktok://user/profile/7398174947992388624";
    const tiktokWebUrl = "https://www.tiktok.com/@tapar.az?_t=8p8L3apAdeb&_r=1";

    if (isMobile) {
      window.location.href = tiktokAppUrl;
    } else {
      window.location.href = tiktokWebUrl;
    }
  };

  return (
    <div className="flex items-center space-x-5">
      <button
        onClick={handleTikTokClick}
        className="flex flex-col p-[10px] md:w-[120px] md:h-[73px] w-[90px] h-[63px] items-center rounded-[10px] bg-[#FAFAFA]"
      >
        <div className="relative md:w-[24px] md:h-[24px] w-[22px] h-[22px]">
          <Image src="ic_round-tiktok.svg" alt="Tiktok" fill />
        </div>

        <h3 className="md:text-[14px] text-[12px] text-[#23283C] pt-[6px]">
          Tiktok
        </h3>
      </button>
      <button
        onClick={handleInstagramClick}
        className="flex flex-col p-[10px] md:w-[120px] md:h-[73px] w-[90px] h-[63px]  items-center rounded-[10px] bg-[#FAFAFA]"
      >
        <div className="relative md:w-[24px] md:h-[24px] w-[20px] h-[20px]">
          <Image src="ri_instagram-fill.svg" alt="Instagram" fill />
        </div>

        <h3 className="md:text-[14px] text-[12px] text-[#23283C] pt-[6px]">
          Instagram
        </h3>
      </button>
      <button
        onClick={openEmail}
        className="flex flex-col p-[10px] md:w-[120px] md:h-[73px] w-[90px] h-[63px]  items-center rounded-[10px] bg-[#FAFAFA]"
      >
        <div className="relative md:w-[24px] md:h-[24px] w-[20px] h-[20px]">
          <Image src="majesticons_mail.svg" alt="Gmail" fill />
        </div>

        <h3 className="md:text-[14px] text-[12px] text-[#23283C] pt-[6px]">
          Gmail
        </h3>
      </button>
    </div>
  );
}

export default SocialMedia;
