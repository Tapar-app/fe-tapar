import React, { useState } from "react";
import MainTabs from "./MainTabs";
import Link from "next/link";
import Image from "next/image";
import { GetAllCategoriesByShoppingCenter } from "../lib/api/category.api";

interface CategoryClientProps {
  categoryData: GetAllCategoriesByShoppingCenter;
}

function CategoryClient({ categoryData }: CategoryClientProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-auto">
        <MainTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="box">
        <div className={"flex gap-[30px] max-[1200px]:flex-col"}>
          <div className={"bg-[#FAFAFA] w-[353px] rounded-[16px] p-5"}>
            <h2 className={"text-[24px] font-medium mb-[15px]"}>
              Bütün kateqoriyalar
            </h2>

            <div className={"flex flex-col"}>
              {categoryData?.object.map((category) => (
                <Link
                  href={`/search?categoryId=${category.id}`}
                  key={category.id}
                  className={"flex gap-3 h-11  items-center"}
                >
                  <Image
                    src={process.env.NEXT_PUBLIC_STATIC_URL + category.icon}
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
            {categoryData?.object?.map((category) => (
              <Link
                href={`/search?categoryId=${category.id}`}
                className={"w-full bg-[#FAFAFA] p-[15px] rounded-[10px]"}
                key={category.id}
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={process.env.NEXT_PUBLIC_STATIC_URL + category.image}
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
                    {category.bazaarGroups[0].bazaarName}
                  </p>
                  <div className={"flex flex-col mt-2.5"}>
                    {category?.childCategories?.map((child) => (
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
      </div>
    </div>
  );
}

export default CategoryClient;
