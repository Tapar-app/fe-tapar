"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "./SearchIcon";
import CloseSquare from "./CloseSquare";
import { useRef } from "react";

function MainInput() {
  const [orientation, setOrientation] = useState("portrait");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerHeight > window.innerWidth) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    };

    handleOrientationChange();

    window.addEventListener("resize", handleOrientationChange);

    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-row items-center">
      <div className="absolute w-[24px] h-[24px] searchIconPositions">
        <SearchIcon />
      </div>

      <input
        ref={inputRef}
        type="search"
        className="bg-none lg:w-[681px] lg:h-[56px] md:w-[581px] md:h-[50px] w-[381px] h-[45px] outline-none border border-1 border-[#E1E1E1] pl-[50px] pr-[50px] rounded-[20px] custom-placeholder"
        placeholder="Axtardığıvı burda yaz!"
      />
      <button
        type="button"
        className="absolute w-[24px] h-[24px] text-[#8E8E8E] inputClearPositions opacity-[50%]"
        onClick={handleReset}
      >
        <CloseSquare />
      </button>
    </div>
  );
}

export default MainInput;
