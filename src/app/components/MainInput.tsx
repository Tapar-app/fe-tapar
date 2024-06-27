"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "./SearchIcon";
import CloseSquare from "./CloseSquare";
import { useRef } from "react";

function MainInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-row items-center relative">
      <div className="absolute w-[24px] h-[24px] left-4">
        <SearchIcon />
      </div>

      <input
        ref={inputRef}
        type="search"
        className="bg-none lg:w-[681px] lg:h-[56px] md:w-[581px] md:h-[50px] iphone-6-plus-portrait:w-[381px] iphone-6-portrait:w-[350px] iphone-5-portrait:w-[315px] iphone-5-portrait:h-[40px] w-[381px] h-[45px] outline-none border border-1 border-[#E1E1E1] pl-[50px] pr-[50px] rounded-[20px] custom-placeholder"
        placeholder="Axtardığıvı burda yaz!"
      />
      <button
        type="button"
        className="absolute w-[24px] h-[24px] text-[#8E8E8E] right-4 opacity-[50%] hover:opacity-100"
        onClick={handleReset}
      >
        <CloseSquare />
      </button>
    </div>
  );
}

export default MainInput;
