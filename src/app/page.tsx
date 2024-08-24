import HomeClient from "./components/HomeClient";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100vh-200px)] space-y-10">
      <Suspense>
        <HomeClient />
      </Suspense>
    </main>
  );
}
