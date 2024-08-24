import { Icons } from "@/app/components/icons";
import Link from "next/link";

interface HeaderProps {}

export default function Header() {
  return (
    <header className="sticky top-0 pl-[50px] pr-[50px] pt-[26px] pb-[26px] h-[100px] w-full">
      <div className={"flex items-center gap-[30px]"}>
        <Link href={"/"}>
          <Icons.logo />
        </Link>
        <Link
          href={"/categories"}
          className={"bg-[#FAFAFA] py-2 sm:py-3  px-3 sm:px-5 text-[14px]"}
        >
          Bütün kateqoriyalar
        </Link>
      </div>
    </header>
  );
}
