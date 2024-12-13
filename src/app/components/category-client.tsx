"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { CategoryApi } from "../lib/api/category.api";
import ItemsNotFound from "./melumat-tapilmadi";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import CategoryTabs from "./category-tabs";
import Loading from "./Loading";

function CategoryClient() {
  const searchParams = useSearchParams();
  const defaultShoppingCenterId = 1;
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
          <div className={"flex gap-[30px] max-[1200px]:flex-col"}>
            <div className={"bg-[#FAFAFA] w-[353px] rounded-[16px] p-5"}>
              <h2 className={"text-[24px] font-medium mb-[15px]"}>
                Bütün kateqoriyalar
              </h2>
              <div className={"flex flex-col"}>
                {categoryData.data.object.map((category) => (
                  <Link
                    href={`/search?shoppingCenterId=${activeTab}&categoryId=${category.id}`}
                    key={category.id}
                    className={"flex gap-3 h-11 items-center"}
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
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={
                "grid min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 gap-[30px]"
              }
            >
              {categoryData.data.object.map((category) => (
                <Link
                  href={`/search?shoppingCenterId=${activeTab}&categoryId=${category.id}`}
                  className={"w-full bg-[#FAFAFA] p-[15px] rounded-[10px]"}
                  key={category.id}
                >
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={
                        category.image
                          ? process.env.NEXT_PUBLIC_STATIC_URL + category.image
                          : "/default-placeholder.png"
                      }
                      alt={category.name}
                      className={"rounded-[10px] object-right"}
                      fill
                    />
                  </div>

                  <div className={"mx-5"}>
                    <h3 className={"text-[20px] font-medium mt-2.5"}>
                      {category.name}
                    </h3>
                    <p className={"mt-0.5 text-gray-500"}>
                      {category.bazaarGroups[0]?.bazaarName || "No Name"}
                    </p>
                    <div className={"flex flex-col mt-2.5"}>
                      {category.childCategories?.map((child) => (
                        <div
                          key={child.id}
                          className={"h-11 flex items-center gap-3"}
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
