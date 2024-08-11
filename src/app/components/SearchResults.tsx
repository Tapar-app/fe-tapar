"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { SearchResult } from "../types/searchTypes";
import { fetchSearchResults } from "../lib/search";
import { CategoryApi } from "@/app/lib/api/category.api";

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const keyword = decodeURIComponent(searchParams.get("keyword") || "");
  const shoppingCenterId = searchParams.get("shoppingCenterId") || "";

  const {
    data: searchResult,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["searchResults", keyword, shoppingCenterId],
    queryFn: () =>
      CategoryApi.searchByKey(
        keyword,
        shoppingCenterId ? shoppingCenterId : null,
      ),
    enabled: !!keyword,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>

      {searchResult && searchResult.data.object.length > 0 ? (
        searchResult.data.object.map((item) => (
          <div key={item.id} className={"p-[15px] flex"}>
            <Image
              src={process.env.NEXT_PUBLIC_STATIC_URL + item.icon}
              alt={item.icon}
              width={30}
              height={30}
            />

          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
