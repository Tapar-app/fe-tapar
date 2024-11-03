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
      setTimeout(() => {
        window.location.href = instagramWebUrl;
      }, 1000);
    } else {
      window.location.href = instagramWebUrl;
    }
  };

  return (
    <div className="flex items-center gap-x-[20px] ">
      <Link
        href="https://www.tiktok.com/@tapar_az"
        className="flex flex-col items-center "
      >
        <div className="relative md:w-[24px] md:h-[24px] w-[22px] h-[22px] opacity-[50%] hover:opacity-100 transition-opacity duration-100 ease-in-out">
          <Image src="/ic_round-tiktok.svg" alt="Tiktok" fill />
        </div>
      </Link>
      <button onClick={handleInstagramClick} className="flex flex-col">
        <div className="relative md:w-[24px] md:h-[24px] w-[20px] h-[20px] opacity-[50%] hover:opacity-100 transition-opacity duration-100 ease-in-out">
          <Image src="/ri_instagram-fill.svg" alt="Instagram" fill />
        </div>
      </button>
      <button onClick={openEmail} className="flex flex-col">
        <div className="relative md:w-[24px] md:h-[24px] w-[20px] h-[20px] opacity-[50%] hover:opacity-100 transition-opacity duration-100 ease-in-out">
          <Image src="/majesticons_mail.svg" alt="Gmail" fill />
        </div>
      </button>
    </div>
  );
}

export default SocialMedia;
