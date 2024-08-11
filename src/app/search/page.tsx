"use client";
import React, { useState } from "react";
import SearchResults from "../components/SearchResults";
import MainTabs from "@/app/components/MainTabs";
function SearchPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={"mx-[50px]"}>
      <div className={"flex justify-center"}>
        <MainTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <SearchResults />
    </div>
  );
}

export default SearchPage;
