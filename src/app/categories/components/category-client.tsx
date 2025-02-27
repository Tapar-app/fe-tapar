"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { CategoryApi } from "@/lib/api/category.api";
import ItemsNotFound from "@/components/NotFound";
import Loading from "@/components/Loading";
import Checkbox from "@/components/Checkbox";

import CategoryTabs from "./CategoryTabs";

function CategoryClient() {
  const searchParams = useSearchParams();
  const defaultShoppingCenterId = 1;

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<number>(defaultShoppingCenterId);

  useEffect(() => {
    const shoppingCenterId = searchParams.get("shoppingCenterId");
    setActiveTab(
      shoppingCenterId
        ? parseInt(shoppingCenterId, 10)
        : defaultShoppingCenterId
    );
  }, [searchParams]);

  const {
    data: categoryData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories", activeTab],
    queryFn: () => CategoryApi.getAll(activeTab),
    enabled: activeTab > 0, // Only fetch if activeTab is valid
  });

  const toggleChecked = (key: string) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev };
      if (newCheckedItems[key]) {
        delete newCheckedItems[key];
      } else {
        newCheckedItems[key] = true;
      }
      return newCheckedItems;
    });
  };

  const filteredList = useMemo(() => {
    if (Object.keys(checkedItems).length) {
      return categoryData?.data.object.filter(
        (category) => checkedItems[category.name]
      );
    } else {
      return categoryData?.data.object;
    }
  }, [categoryData, Object.keys(checkedItems)]);

  // Setting active tab based on URL query
  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading categories.</div>;
  if (!categoryData?.data?.object.length) return <ItemsNotFound />;

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-auto">
        <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="box">
        {categoryData?.data.object.length > 0 ? (
          <div className="grid grid-cols-[1fr_4fr] gap-3">
            <div className="bg-[#FAFAFA] rounded-[16px] p-5 min-w-[285px]">
              <h2 className="text-[24px] font-medium mb-[15px]">
                Bütün kateqoriyalar
              </h2>
              <div className="flex flex-col">
                {categoryData.data.object.map((category) => (
                  <div
                    key={category.id}
                    className="flex gap-3 h-11 items-center justify-between cursor-pointer"
                    onClick={() => toggleChecked(category.name)}
                  >
                    <Image
                      src={
                        category.icon
                          ? process.env.NEXT_PUBLIC_STATIC_URL + category.icon
                          : "/default-icon.png"
                      }
                      alt={category.name}
                      width={24}
                      height={24}
                    />
                    {category.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full max-h-96">
              {filteredList?.map((category) => (
                <Link
                  href={`/search?shoppingCenterId=${activeTab}&categoryId=${category.id}`}
                  className="w-full bg-[#FAFAFA] p-4 rounded-[10px]"
                  key={category.id}
                >
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={
                        category.image
                          ? process.env.NEXT_PUBLIC_STATIC_URL + category.image
                          : "/default-placeholder.png"
                      }
                      alt={category.name}
                      className="rounded-[10px] object-cover"
                      fill
                    />
                  </div>

                  <div className="mx-5">
                    <h3 className="text-[20px] font-medium mt-2.5">
                      {category.name}
                    </h3>
                    <p className="mt-0.5 text-gray-500">
                      {category.bazaarGroups[0]?.bazaarName || "No Name"}
                    </p>
                    <div className="flex flex-col mt-2.5">
                      {category.childCategories?.map((child) => (
                        <div
                          key={child.id}
                          className="h-11 flex items-center gap-3"
                        >
                          {child.icon && (
                            <Image
                              src={
                                process.env.NEXT_PUBLIC_STATIC_URL + child.icon
                              }
                              alt={child.name}
                              width={24}
                              height={24}
                            />
                          )}
                          <p>{child.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <ItemsNotFound />
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryClient;
