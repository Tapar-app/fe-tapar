import Image from "next/image";
import CloseSquare from "./components/CloseSquare";
import SearchIcon from "./components/SearchIcon";
import MainTabs from "./components/MainTabs";
import MainInput from "./components/MainInput";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-10">
      <div>
        <h1 className="text-[60px] font-semibold">
          Axtaran - <span className="text-[#F5A630]">Tapar</span>
          <span className="exclamation-mark">!</span>
        </h1>
      </div>

      <MainInput />

      <MainTabs />
    </main>
  );
}
