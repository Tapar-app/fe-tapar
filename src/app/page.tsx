import Image from "next/image";
import CloseSquare from "./components/CloseSquare";
import SearchIcon from "./components/SearchIcon";
import MainTabs from "./components/MainTabs";
import MainInput from "./components/MainInput";
import HomeClient from "./components/HomeClient";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-10">
      <HomeClient />
    </main>
  );
}
