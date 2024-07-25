import React, { FC } from "react";
import { Icons } from "@/app/components/icons";
import Link from "next/link";

interface HeaderProps {}

export default function Header() {
  return (
    <Link href="/" className="fixed pl-[50px] pr-[50px] pt-[26px] pb-[26px]">
      <Icons.logo />
    </Link>
  );
}
