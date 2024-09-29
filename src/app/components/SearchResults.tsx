"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Category, CategoryApi } from "@/app/lib/api/category.api";
import Link from "next/link";

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const keyword = decodeURIComponent(searchParams.get("keyword") || "");
  const [loading, setLoading] = useState<boolean>(true);
  const shoppingCenterId = searchParams.get("shoppingCenterId") || "0";
  const {
    data: searchResult,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["searchResults", keyword, shoppingCenterId],
    queryFn: () =>
      CategoryApi.searchByKey(
        keyword,
        shoppingCenterId ? shoppingCenterId : null
      ),
    enabled: !!keyword,
  });

  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [selectedSequence, setSelectedSequence] = useState<{
    [key: number]: number;
  }>({});

  const handleSequenceSelect = (groupId: number, sequenceNumber: number) => {
    setSelectedSequence((prev) => ({
      ...prev,
      [groupId]: sequenceNumber, // Update the selected sequence for the specific group
    }));
  };

  useEffect(() => {
    if (searchResult?.data?.object[0]?.id) {
      setLoading(true);
      CategoryApi.getCategoryInformation(
        shoppingCenterId,
        String(searchResult.data.object[0].id) as string
      )
        .then((res) => {
          setCategoryData(res.data);

          // Setting the first sequence for each group as the default
          const defaultSelections: { [key: number]: number } = {};
          res.data.bazaarGroups.forEach((group) => {
            if (group.bazaarDetails.length > 0) {
              defaultSelections[group.bazaarId] =
                group.bazaarDetails[0].sequenceNumber;
            }
          });
          setSelectedSequence(defaultSelections);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [searchResult]);

  if (isLoading || loading)
    return (
      <div className={"w-full h-[400px] flex justify-center items-center"}>
        <div role="status">
          <svg
            aria-hidden="true"
            className={
              "w-16 h-16 text-gray-200 animate-spin dark:text-gray-100 fill-[#F5A630]"
            }
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className={"font-semibold text-[32px] mt-7"}>{categoryData?.name}</h2>
      {categoryData ? (
        <div
          className={
            "relative grid grid-cols-1 min-[900px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-[30px] mt-5"
          }
        >
          {categoryData.bazaarGroups.map((group) => (
            <div
              key={group.bazaarId}
              className="bg-[#FAFAFA] rounded-[10px] p-[15px] flex gap-5 min-h-[210px] max-sm:flex-col"
            >
              <div className="relative w-full h-[173px]">
                <Image
                  src={process.env.NEXT_PUBLIC_STATIC_URL + categoryData!.image}
                  alt={categoryData?.name || ""}
                  fill
                  className="object-cover rounded-[10px]"
                  priority
                  quality={100}
                />
              </div>
              <div className="w-full">
                <div className="flex w-full justify-between items-center mb-[15px] gap-4">
                  <h4 className="text-[#23283C] text-[24px] font-medium ">
                    {categoryData.name}
                  </h4>
                  <p className="text-[#6D7287] text-[12px]">
                    {group.bazaarName}
                  </p>
                </div>

                <h5 className="mb-[10px] text-[#6D7287]">Sıra</h5>

                <div className="flex mb-[10px] gap-2.5">
                  {group.bazaarDetails.map((bazaarDetail) => (
                    <div
                      onClick={() =>
                        handleSequenceSelect(
                          group.bazaarId,
                          bazaarDetail.sequenceNumber
                        )
                      }
                      key={bazaarDetail.sequenceNumber}
                      className={`w-6 h-6 rounded-[6px] flex justify-center items-center text-[12px] cursor-pointer ${
                        selectedSequence[group.bazaarId] ===
                        bazaarDetail.sequenceNumber
                          ? "bg-[#F5A630] text-white"
                          : "bg-white border-[#E1E1E1] border"
                      }`}
                    >
                      {bazaarDetail.sequenceNumber}
                    </div>
                  ))}
                </div>

                <h5 className="mb-[10px] text-[#6D7287]">Mağaza</h5>

                <div className="grid grid-cols-7 gap-3">
                  {group.bazaarDetails
                    .find(
                      (bazaarDetail) =>
                        bazaarDetail.sequenceNumber ===
                        selectedSequence[group.bazaarId]
                    )
                    ?.shopNumbers.map((shopNumber) => (
                      <div
                        className="w-6 h-6 text-[#23283C] rounded-[6px] bg-white flex justify-center items-center text-[12px]"
                        key={shopNumber}
                      >
                        {shopNumber}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={"flex flex-col w-full items-center mt-[50px] "}>
          <h2 className={"font-semibold text-[32px]"}>Məlumat tapılmadı :(</h2>
          <Image
            src={"/not-found.png"}
            alt={"Not found"}
            width={375}
            height={282}
          />
          <Link href={"/"} className={"text-[#F5A630] underline text-[14px]"}>
            Ana səhifəyə qayıt
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
