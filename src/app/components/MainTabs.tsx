"use client";
import React from "react";

interface MainTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MainTabs: React.FC<MainTabsProps> = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#F3F3F3] p-[8px] rounded-2xl">
      <div className="flex flex-row transition-all delay-150">
        {["Bütün bazarlar", "Sədərək", "Binə", "Laçın", "Riyad", "Abşeron"].map(
          (bazaar) => (
            <button
              key={bazaar}
              type="button"
              className={`font-[700] ${
                activeTab === bazaar ? "text-black bg-white" : "text-[#8E8E8E]"
              } xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding rounded-lg transition-all ease-out`}
              onClick={() => handleTabClick(bazaar)}
            >
              {bazaar}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MainTabs;
