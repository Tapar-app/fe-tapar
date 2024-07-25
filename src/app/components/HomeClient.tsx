"use client";
import React, { useState } from "react";
import MainInput from "./MainInput";
import MainTabs from "./MainTabs";

const HomeClient: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("Bütün bazarlar");

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-10">
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
      <MainTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default HomeClient;
