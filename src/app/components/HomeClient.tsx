"use client";
import React, { Suspense, useState } from "react";
import MainInput from "./MainInput";
import MainTabs from "./MainTabs";
import SocialMedia from "./social-media";

const HomeClient: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col items-center md:min-h-[91vh] min-h-[81vh]">
      <div className="flex flex-col items-center justify-center flex-1 space-y-10">
        <div>
          <h1 className="xl:text-[60px] lg:text-[60px] sm:text-[45px] text-[40px] font-semibold text-center">
            Axtaran - <span className="text-[#F5A630]">Tapar</span>
            <span className="exclamation-mark">!</span>
          </h1>
        </div>

        <MainInput
          keyword={keyword}
          setKeyword={setKeyword}
          activeTab={activeTab}
        />

        <Suspense>
          <MainTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Suspense>
      </div>

      <SocialMedia />
    </div>
  );
};

export default HomeClient;
