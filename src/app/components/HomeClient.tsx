"use client";
import React, { Suspense, useState } from "react";
import MainInput from "./MainInput";
import MainTabs from "./MainTabs";
import SocialMedia from "./social-media";
import Banner from "./Banner";
import BannerMobile from "./banner-mob";

const HomeClient: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col items-center md:min-h-[91vh] min-h-[78vh]">
      <div className="flex flex-col items-center justify-center flex-1 space-y-10">
        <div className="hidden sm:hidden md:flex sm:justify-center">
          <Banner />
        </div>
        <div className="flex sm:flex md:hidden">
          <BannerMobile />
        </div>

        <div>
          <h1 className="xl:text-[60px] lg:text-[60px] sm:text-[40px] text-[40px] font-semibold text-center">
            Axtaran - <span className="text-[#F5A630]">Tapar</span>
            <span className="exclamation-mark">!</span>
          </h1>
        </div>
        <Suspense>
          <MainInput
            keyword={keyword}
            setKeyword={setKeyword}
            activeTab={activeTab}
          />
        </Suspense>

        <Suspense>
          <MainTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Suspense>
      </div>

      <div className="md:hidden sm:flex-inline flex-inline mt-4 sm:mt-4">
        <SocialMedia />
      </div>
    </div>
  );
};

export default HomeClient;
