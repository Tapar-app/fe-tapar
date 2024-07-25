"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import fetchSearchResults from "../lib/search";

interface SearchResult {
  id: number;
  name: string;
  icon: string;
  shoppingCenter: {
    id: number;
    name: string;
    active: boolean;
  };
}

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const shoppingCenterId = searchParams.get("shoppingCenterId") || "";

  const {
    data: searchResult,
    error,
    isLoading,
  } = useQuery<SearchResult[], Error>({
    queryKey: ["searchResults", keyword, shoppingCenterId],
    queryFn: () =>
      fetchSearchResults(
        keyword,
        shoppingCenterId ? Number(shoppingCenterId) : undefined
      ),
    enabled: !!keyword,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {searchResult && searchResult.length > 0 ? (
        searchResult.map((item) => (
          <div key={item.id} className="p-4 border-b">
            <h3 className="font-bold">{item.name}</h3>
            <Image src={item.icon} alt={item.name} width={24} height={24} />
            <p>Shopping Center: {item.shoppingCenter.name}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
