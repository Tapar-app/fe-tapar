"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchIcon from "./SearchIcon";
import CloseSquare from "./CloseSquare";
import { MainInputProps, SearchResult } from "../types/searchTypes";
import { fetchSearchResults, fetchSearchSuggestions } from "../lib/search";
import Image from "next/image";

const MainInput: React.FC<MainInputProps> = ({
  keyword,
  setKeyword,
  activeTab,
}) => {
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const results = await fetchSearchSuggestions(debouncedKeyword);
      const updatedResults = results.map((item) => ({
        ...item,
        icon: item.icon
          ? `${process.env.NEXT_PUBLIC_STATIC_URL}/${item.icon}`
          : "/güzgülər.svg",
      }));
      setSuggestions(updatedResults);
    };

    fetchSuggestions();
  }, [debouncedKeyword]);

  const handleSearch = async (categoryId: number, shoppingCenterId: number) => {
    if (!categoryId || !shoppingCenterId) return;

    router.push(
      `/search?categoryId=${categoryId}&shoppingCenterId=${shoppingCenterId}`
    );
  };

  const handleReset = () => {
    setKeyword("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSuggestions([]);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
  };

  const handleOnKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || !keyword.trim()) return;

    try {
      const searchResults = await fetchSearchResults(keyword);

      if (searchResults.length > 0) {
        const { id, shoppingCenter } = searchResults[0];
        router.push(
          `/search?categoryId=${id}&shoppingCenterId=${shoppingCenter.id}`
        );
      } else {
        router.push(`/search?keyword=${keyword}`);
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target as Node)
    ) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex flex-row items-center w-full relative">
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
      {suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className="absolute top-[66px] left-0 w-full bg-white border rounded-[20px] border-[#E1E1E1] z-10 transition-opacity duration-300 ease-in-out transform opacity-100 translate-y-0"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.id}
              className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 transition-all ease-in-out ${
                index === 0 ? "rounded-t-[20px]" : ""
              } ${index === suggestions.length - 1 ? "rounded-b-[20px]" : ""}`}
              onClick={() => {
                setKeyword(suggestion.name);
                handleSearch(suggestion.id, suggestion.shoppingCenter.id);
              }}
            >
              <Image
                src={suggestion.icon || "/güzgülər.svg"}
                alt={suggestion.name}
                width={24}
                height={24}
              />
              <span className="ml-2 text-[16px]">{suggestion.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainInput;
