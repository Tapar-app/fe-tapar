"use client";
import React, { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchIcon from "./SearchIcon";
import CloseSquare from "./CloseSquare";

interface MainInputProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  activeTab: string;
}

const bazaarIds: Record<string, number> = {
  Sədərək: 1,
  Binə: 2,
  Laçın: 3,
  Riyad: 4,
  Abşeron: 5,
};

const MainInput: React.FC<MainInputProps> = ({
  keyword,
  setKeyword,
  activeTab,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const shoppingCenterId =
      activeTab !== "Bütün bazarlar" ? bazaarIds[activeTab] : undefined;
    const params = new URLSearchParams(searchParams.toString());
    params.set("keyword", keyword);
    if (shoppingCenterId) {
      params.set("shoppingCenterId", shoppingCenterId.toString());
    } else {
      params.delete("shoppingCenterId");
    }
    router.push(`/search?${params.toString()}`);
  };

  const handleReset = () => {
    setKeyword("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-row items-center relative">
      <div className="absolute w-[24px] h-[24px] left-4">
        <SearchIcon />
      </div>
      <input
        ref={inputRef}
        type="search"
        value={keyword}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        className="bg-none lg:w-[681px] lg:h-[56px] md:w-[581px] md:h-[50px] iphone-6-plus-portrait:w-[381px] iphone-6-portrait:w-[350px] iphone-5-portrait:w-[315px] iphone-5-portrait:h-[40px] w-[381px] h-[45px] outline-none border border-1 border-[#E1E1E1] pl-[50px] pr-[50px] rounded-[20px] custom-placeholder"
        placeholder="Axtardığınızı bura yazın!"
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
};

export default MainInput;
