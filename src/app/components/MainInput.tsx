"use client";
import React from "react";
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
    <div className="flex flex-row items-center">
      <div className="absolute w-[24px] h-[24px] left-[33%]">
        <SearchIcon />
      </div>

      <input
        ref={inputRef}
        type="search"
        className="bg-none w-[681px] h-[56px] outline-none border border-1 border-[#E1E1E1] pl-[50px] rounded-3xl custom-placeholder"
        placeholder="Axtardığıvı burda yaz!"
      />
      <button
        type="button"
        className="absolute w-[24px] h-[24px] text-[#8E8E8E] right-[33%] opacity-[50%]"
        onClick={handleReset}
      >
        <CloseSquare />
      </button>
    </div>
  );
}

export default MainInput;
