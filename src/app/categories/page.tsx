import { Suspense } from "react";
import Loading from "../components/Loading";
import dynamic from "next/dynamic";

const CategoryClient = dynamic(
  () => import("@/app/components/category-client"),
  { ssr: false }
);

export default function CategoryPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryClient />
      </Suspense>
    </div>
  );
}
