import React from "react";

function MainTabs() {
  return (
    <div className="bg-[#F3F3F3] p-[8px] rounded-2xl">
      <div className="flex flex-row transition-all delay-150">
        <button
          type="button"
          className="font-[700] xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding focus:bg-white rounded-lg transition-all ease-out"
        >
          Bütün Bazarlar
        </button>
        <button
          type="button"
          className="font-[700] xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding focus:bg-white rounded-lg transition-all ease-out"
        >
          Sədərək
        </button>
        <button
          type="button"
          className="font-[700] xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding focus:bg-white rounded-lg transition-all ease-out"
        >
          Binə
        </button>
        <button
          type="button"
          className="font-[700] xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding focus:bg-white rounded-lg transition-all ease-out"
        >
          Laçın
        </button>
        <button
          type="button"
          className="font-[700] xl:text-[14px] lg:text-[16px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding focus:bg-white rounded-lg transition-all ease-out"
        >
          Riyad
        </button>
        <button
          type="button"
          className="font-[700] xl:text-[14px] lg:text-[14px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[12px] mainTabsPadding focus:bg-white rounded-lg transition-all ease-out"
        >
          Abşeron
        </button>
      </div>
    </div>
  );
}

export default MainTabs;
