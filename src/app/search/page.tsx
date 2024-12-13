import React, { Suspense, useState } from "react";
import SearchResults from "../components/SearchResults";
import MainTabs from "@/app/components/MainTabs";
function SearchPage() {
  return (
    <div className={"mx-5 sm:mx-[50px]"}>
      <Suspense>
        <SearchResults />
      </Suspense>
    </div>
  );
}

export default SearchPage;
