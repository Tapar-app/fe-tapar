"use client";
import React, { Suspense, useState } from "react";
import SearchResults from "../components/SearchResults";
import MainTabs from "@/app/components/MainTabs";
function SearchPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={"mx-5 sm:mx-[50px]"}>
      <div className={"flex justify-center"}>
        <Suspense>
          <MainTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Suspense>
      </div>
      <Suspense>
        <SearchResults />
      </Suspense>
    </div>
  );
}

export default SearchPage;
