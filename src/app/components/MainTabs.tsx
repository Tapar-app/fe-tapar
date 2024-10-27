"use client";
import React, { Suspense, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCenterApi } from "@/app/lib/api/shopping-center.api";

interface MainTabsProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const MainTabs: React.FC<MainTabsProps> = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  const { data: shoppingCenters } = useQuery({
    queryKey: ["shopping-centers"],
    queryFn: ShoppingCenterApi.getAll,
  });

  const params = useSearchParams();

  useEffect(() => {
    if (shoppingCenters) {
      setActiveTab(
        params.get("shoppingCenterId")
          ? // @ts-ignore
            (+params.get("shoppingCenterId") as number)
          : shoppingCenters.data.object[0].id
      );
    }
  }, [params, shoppingCenters]);

  return (
    <div className="bg-[#F3F3F3] p-[8px] rounded-2xl">
      <div className="flex flex-row transition-all delay-150">
        {shoppingCenters?.data?.object?.map((bazaar, index) => (
          <button
            key={bazaar.id}
            type="button"
            className={`font-[700] ${
              activeTab === bazaar.id ? "text-black bg-white" : "text-[#8E8E8E]"
            } relative xl:text-[14px] lg:text-[14px] md:text-[14px] iphone-6-portrait:text-[10px] iphone-6-plus-portrait:text-[11.5px] iphone-5-portrait:text-[8.2px] text-[11.5px] mainTabsPadding rounded-lg transition-all ease-out ${
              index === 0 ? "" : "cursor-not-allowed"
            }`}
            onClick={() => index === 0 && handleTabClick(bazaar.id)}
            disabled={index !== 0}
          >
            {bazaar.name}
            {index !== 0 && (
              <span className="absolute left-full ml-4 text-xs sm::text-sm md:text-sm bottom-[-9px] sm:bottom-[-9px] md:bottom-[-6px] font-[700] bg-[#F3F3F3] text-[#8E8E8E] text-[11.5px] p-[10px] rounded-2xl transition-all duration-300 tooltip-hover">
                Tezliklə!
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainTabs;
