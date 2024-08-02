import React, { FC } from "react";
import { Icons } from "@/app/components/icons";
import Link from "next/link";

interface HeaderProps {}

export default function Header() {
  return (
    <div className="sticky top-0 pl-[50px] pr-[50px] pt-[26px] pb-[26px] h-[100px] w-full">
      <div className={"flex items-center gap-[30px]"}>
        <Icons.logo />
        <Link href={"/categories"} className={"bg-[#FAFAFA] py-3 px-5"}>
          Bütün kateqoriyalar
        </Link>
      </div>
    </div>
  );
}
