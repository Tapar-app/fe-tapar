import React, { FC } from "react";
import { Icons } from "@/app/components/icons";

interface HeaderProps {}

export default function Header() {
  return (
    <div className="fixed pl-[50px] pr-[50px] pt-[26px] pb-[26px]">
      <Icons.logo />
    </div>
  );
}
