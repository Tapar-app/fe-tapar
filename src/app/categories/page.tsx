"use client";

import { useQuery } from "@tanstack/react-query";
import { CategoryApi } from "@/app/lib/api/category.api";
import Image from "next/image";
import Link from "next/link";
import MainTabs from "../components/MainTabs";

import CategoryClient from "../components/category-client";
import Loading from "../components/Loading";

export default function Page() {
  const { data: categoryData } = useQuery({
    queryKey: ["categories"],
    queryFn: CategoryApi.getAll,
  });

  if (!categoryData)
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Loading />
      </div>
    );

  return (
    <div>
      <CategoryClient categoryData={categoryData.data} />
    </div>
  );
}
