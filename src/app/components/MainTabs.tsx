"use client";
import React from "react";
import { useState } from "react";

function MainTabs() {
  const [activeTab, setActiveTab] = useState<string>("Bütün Bazarlar");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#F3F3F3] p-[8px] rounded-2xl">
      <div className="flex flex-row transition-all delay-150">
        <button
          type="button"
          className={`font-[700] ${
            activeTab === "Bütün Bazarlar"
              ? "text-black bg-white"
              : "text-[#8E8E8E]"
          } xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding rounded-lg transition-all ease-out`}
          onClick={() => handleTabClick("Bütün Bazarlar")}
        >
          Bütün Bazarlar
        </button>
        <button
          type="button"
          className={`font-[700] ${
            activeTab === "Sədərək" ? "text-black bg-white" : "text-[#8E8E8E]"
          } xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding rounded-lg transition-all ease-out`}
          onClick={() => handleTabClick("Sədərək")}
        >
          Sədərək
        </button>
        <button
          type="button"
          className={`font-[700] ${
            activeTab === "Binə" ? "text-black bg-white" : "text-[#8E8E8E]"
          } xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding rounded-lg transition-all ease-out`}
          onClick={() => handleTabClick("Binə")}
        >
          Binə
        </button>
        <button
          type="button"
          className={`font-[700] ${
            activeTab === "Laçın" ? "text-black bg-white" : "text-[#8E8E8E]"
          } xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding rounded-lg transition-all ease-out`}
          onClick={() => handleTabClick("Laçın")}
        >
          Laçın
        </button>
        <button
          type="button"
          className={`font-[700] ${
            activeTab === "Riyad" ? "text-black bg-white" : "text-[#8E8E8E]"
          } xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding rounded-lg transition-all ease-out`}
          onClick={() => handleTabClick("Riyad")}
        >
          Riyad
        </button>
        <button
          type="button"
          className={`font-[700] ${
            activeTab === "Abşeron" ? "text-black bg-white" : "text-[#8E8E8E]"
          } xl:text-[14px] lg:text-[14px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[12px] mainTabsPadding rounded-lg transition-all ease-out`}
          onClick={() => handleTabClick("Abşeron")}
        >
          Abşeron
        </button>
      </div>
    </div>
  );
}

export default MainTabs;
