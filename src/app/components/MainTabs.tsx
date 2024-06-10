import React from "react";

function MainTabs() {
  return (
    <div className="bg-[#F3F3F3] p-[8px] rounded-2xl">
      <div className="flex flex-row transition-all delay-150">
        <button
          type="button"
          className="font-[700] text-[14px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] focus:bg-white rounded-lg transition-all ease-out"
        >
          Bütün Bazarlar
        </button>
        <button
          type="button"
          className="font-[700] text-[14px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] focus:bg-white rounded-lg transition-all ease-out"
        >
          Sədərək
        </button>
        <button
          type="button"
          className="font-[700] text-[14px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] focus:bg-white rounded-lg transition-all ease-out"
        >
          Binə
        </button>
        <button
          type="button"
          className="font-[700] text-[14px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] focus:bg-white rounded-lg transition-all ease-out"
        >
          Laçın
        </button>
        <button
          type="button"
          className="font-[700] text-[14px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] focus:bg-white rounded-lg transition-all ease-out"
        >
          Riyad
        </button>
        <button
          type="button"
          className="font-[700] text-[14px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] focus:bg-white rounded-lg transition-all ease-out"
        >
          Abşeron
        </button>
      </div>
    </div>
  );
}

export default MainTabs;
