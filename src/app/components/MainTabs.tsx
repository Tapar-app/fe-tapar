"use client";
import React, { Suspense, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCenterApi } from "@/app/lib/api/shopping-center.api";
import Loading from "./Loading";

interface MainTabsProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const MainTabs: React.FC<MainTabsProps> = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  const {
    data: shoppingCenters,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shopping-centers"],
    queryFn: ShoppingCenterApi.getAll,
  });

  const params = useSearchParams();

  // Setting the default active tab based on query parameters or the first shopping center
  useEffect(() => {
    if (shoppingCenters && shoppingCenters.data.object.length > 0) {
      const defaultTab = params.get("shoppingCenterId")
        ? parseInt(params.get("shoppingCenterId") as string, 10)
        : shoppingCenters.data.object[0]?.id;

      setActiveTab(defaultTab);
    }
  }, [params, shoppingCenters]);

  if (isLoading) {
    <Loading />;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">Error loading shopping centers.</div>
    );
  }

  return (
    <div className="bg-[#F3F3F3] p-[8px] rounded-2xl">
      <div className="flex flex-row transition-all delay-150">
        {shoppingCenters?.data?.object?.map((bazaar: any) => (
          <button
            key={bazaar.id}
            type="button"
            className={`font-[700] ${
              activeTab === bazaar.id ? "text-black bg-white" : "text-[#8E8E8E]"
            } relative xl:text-[14px] lg:text-[14px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding rounded-lg transition-all ease-out `}
            onClick={() => handleTabClick(bazaar.id)}
          >
            {bazaar.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainTabs;
