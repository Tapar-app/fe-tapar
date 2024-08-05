import Image from "next/image";
import CloseSquare from "./components/CloseSquare";
import SearchIcon from "./components/SearchIcon";
import MainTabs from "./components/MainTabs";
import MainInput from "./components/MainInput";
import HomeClient from "./components/HomeClient";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center 2xl:mt-[145px] xl:mt-[140px] lg:mt-[400px] md:mt-[300px] mt-[400px] iphone-6-portrait:mt-[130px] iphone-6-landscape:mt-[10px] iphone-6-plus-portrait:mt-[20px] iphone-12-pro-portrait:mt-[200px] iphone-14-pro-portrait:mt-[250px] ipad-air-landscape:mt-[160px] ipad-pro-landscape:mt-[300px] space-y-10">
      <HomeClient />
    </main>
  );
}
