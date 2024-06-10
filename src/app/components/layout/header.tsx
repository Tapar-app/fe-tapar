import React, { FC } from "react";
import { Icons } from "@/app/components/icons";

interface HeaderProps {}

export default function Header() {
  return (
    <div className="fixed">
      <Icons.logo />
    </div>
  );
}
