'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { SearchResult } from '@/types/searchTypes';
import { useShoppingCenterStore } from '@/store/shopping-center-store';

import SearchIcon from './SearchIcon';
import CloseSquare from './CloseSquare';
import { fetchSearchResults, fetchSearchSuggestions } from '../lib/search';
import Loading from './Loading';

const MainInput = () => {
  const { shoppingCenterId } = useShoppingCenterStore();

  const [keyword, setKeyword] = useState<string>('');
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);
  const [isOpen, toggleOpen] = useState<boolean>(false);

  const [visibleReset, setVisibleReset] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  // Debounce the keyword to avoid frequent API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  // Fetch search suggestions based on the debounced keyword and activeTab
  const { data, isLoading } = useQuery({
    queryKey: ['searchSuggestions', debouncedKeyword, shoppingCenterId],
    queryFn: () => fetchSearchSuggestions(debouncedKeyword, shoppingCenterId),
    enabled: !!debouncedKeyword,
  });

  useEffect(() => {
    if (data) {
      setSuggestions(data);
    }
  }, [data]);

  const handleSearch = async (categoryId: number, shoppingCenterId: number) => {
    if (!categoryId || !shoppingCenterId) return;

    router.push(
      `/search?categoryId=${categoryId}&shoppingCenterId=${shoppingCenterId}`
    );

    setSuggestions([]);
    setKeyword('');
  };
  // Reset the input and suggestions
  const handleReset = () => {
    setKeyword('');
    setVisibleReset(false);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setSuggestions([]);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    setVisibleReset(value.length > 0);
  };

  // Handle Enter key to trigger a search
  const handleOnKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !keyword.trim()) return;

    try {
      const searchResults = await fetchSearchResults(keyword, shoppingCenterId);

      if (searchResults.length > 0) {
        const { id, shoppingCenter } = searchResults[0];
        router.push(
          `/search?categoryId=${id}&shoppingCenterId=${shoppingCenter.id}`
        );
      } else {
        router.push(
          `/search?keyword=${keyword}&shoppingCenterId=${shoppingCenterId}`
        );
      }
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  // Close suggestions on outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target as Node)
    ) {
      setSuggestions([]);
      setKeyword('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex flex-col items-center relative'>
      <div className='flex flex-row items-center w-full relative'>
        <div className='absolute w-[24px] h-[24px] left-4'>
          <SearchIcon />
        </div>
        <input
          ref={inputRef}
          type='search'
          value={keyword}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          className='bg-none lg:w-[531px] lg:h-[56px] md:w-[251px] md:h-[50px] iphone-6-plus-portrait:w-[281px] iphone-6-portrait:w-[250px] iphone-5-portrait:w-[215px] iphone-5-portrait:h-[40px] w-[281px] h-[45px] outline-none border border-1 border-[#E1E1E1] pl-[50px] pr-[50px] rounded-[20px] custom-placeholder'
          placeholder='Axtardığınızı bura yazın!'
        />
        {visibleReset && (
          <button
            type='button'
            className='absolute w-[24px] h-[24px] text-[#8E8E8E] right-4 opacity-[50%] hover:opacity-100'
            onClick={handleReset}
          >
            <CloseSquare />
          </button>
        )}
      </div>
      {isLoading || suggestions.length > 0 ? (
        <ul
          ref={suggestionsRef}
          className='absolute top-[66px] left-0 w-full bg-white border rounded-[20px] border-[#E1E1E1] z-10 transition-opacity duration-300 ease-in-out transform opacity-100 translate-y-0'
        >
          {isLoading ? (
            <div className='flex justify-center'>
              <Loading />
            </div>
          ) : (
            suggestions.map((suggestion, index) => (
              <li
                key={suggestion.id}
                className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 transition-all ease-in-out ${
                  index === 0 ? 'rounded-t-[20px]' : ''
                } ${
                  index === suggestions.length - 1 ? 'rounded-b-[20px]' : ''
                }`}
                onClick={() => {
                  handleSearch(suggestion.id, suggestion.shoppingCenter.id);
                }}
              >
                <Image
                  src={
                    suggestion.icon
                      ? `${process.env.NEXT_PUBLIC_STATIC_URL}/${suggestion.icon}`
                      : '/güzgülər.svg'
                  }
                  alt={suggestion.name}
                  width={24}
                  height={24}
                />
                <span className='ml-2 text-[16px]'>{suggestion.name}</span>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default MainInput;
