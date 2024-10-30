"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Category, CategoryApi } from "@/app/lib/api/category.api";
import Link from "next/link";
import Loading from "./Loading";
import ItemsNotFound from "./melumat-tapilmadi";

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId") || "";
  const shoppingCenterId = searchParams.get("shoppingCenterId") || "0";

  // Fetching category data by ID
  const {
    data: categoryDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categoryData", categoryId, shoppingCenterId],
    queryFn: () =>
      CategoryApi.getCategoryInformation(shoppingCenterId, categoryId),
    enabled: !!categoryId,
  });

  const categoryData = categoryDetails?.data;

  const [selectedSequence, setSelectedSequence] = useState<{
    [key: number]: number;
  }>({});

  const handleSequenceSelect = (groupId: number, sequenceNumber: number) => {
    setSelectedSequence((prev) => ({
      ...prev,
      [groupId]: sequenceNumber,
    }));
  };

  useEffect(() => {
    if (categoryData) {
      // Setting the first sequence as default
      const defaultSelections: { [key: number]: number } = {};
      categoryData.bazaarGroups.forEach((group) => {
        if (group.bazaarDetails.length > 0) {
          defaultSelections[group.bazaarId] =
            group.bazaarDetails[0].sequenceNumber;
        }
      });
      setSelectedSequence(defaultSelections);
    }
  }, [categoryData]);

  if (isLoading)
    return (
      <div className="w-full h-[400px] flex justify-center items-center">
        <Loading />
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
                        className="w-6 h-6 text-[#23283C] rounded-[6px] bg-[#E1E1E1] flex justify-center items-center text-[12px]"
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
        <ItemsNotFound />
      )}
    </div>
  );
};

export default SearchResults;
