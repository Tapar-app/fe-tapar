"use client";

import { useQuery } from "@tanstack/react-query";
import { CategoryApi } from "@/app/lib/api/category.api";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: CategoryApi.getAll,
  });
  return (
    <div className={"box mt-[30px]"}>
      <div className={"flex gap-[30px] max-[1200px]:flex-col"}>
        <div className={"bg-[#FAFAFA] w-[353px] rounded-[16px] p-5"}>
          <h2 className={"text-[24px] font-medium mb-[15px]"}>
            Bütün kateqoriyalar
          </h2>

          <div className={"flex flex-col"}>
            {data?.data?.object?.map((category) => (
              <Link
                href={`/search?keyword=${category.name}`}
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
          {data?.data?.object?.map((category) => (
            <Link
              href={`/search?keyword=${category.name}`}
              className={"w-full bg-[#FAFAFA] p-[15px] "}
              key={category.id}
            >
              <Image
                src={process.env.NEXT_PUBLIC_STATIC_URL + category.image}
                alt={category.name}
                width={300}
                height={300}
                className={"rounded-[10px] w-full"}
              />
              <div className={"mx-5"}>
                <h3 className={"text-[20px] font-medium mt-2.5"}>
                  {category.name}
                </h3>
                <div className={"flex flex-col mt-2.5"}>
                  {category?.childCategories?.map((child) => (
                    <div
                      key={child.id}
                      className={"h-11 flex items-center gap-3"}
                    >
                      {child.icon && (
                        <Image
                          src={process.env.NEXT_PUBLIC_STATIC_URL + child.icon}
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
  );
}
