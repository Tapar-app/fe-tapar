import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Category } from '@/lib/api/category.api';

interface IProps {
  categoryData: Category;
}

function CategoryDetail({ categoryData }: IProps) {
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

  return (
    <>
      {categoryData.bazaarGroups.map((group, index) => (
        <div
          key={group.bazaarId}
          className='bg-[#FAFAFA] rounded-[10px] p-[15px] flex gap-5 min-h-[210px] max-sm:flex-col'
        >
          <div className='flex flex-col'>
            <div className='relative w-full h-[173px]'>
              <Image
                src={process.env.NEXT_PUBLIC_STATIC_URL + categoryData!.image}
                alt={categoryData?.name || ''}
                fill
                className='object-cover rounded-[10px]'
                priority
                quality={100}
              />
            </div>

            <div
              className={`w-full sm:w-[168px] h-[38px] flex justify-center items-center mt-[10px] rounded-[5px] ${`bg-color-${
                index % 5
              }`}`}
            >
              <p className={`text-color-${index % 5} text-center text-[12px]`}>
                {group.bazaarName}
              </p>
            </div>
          </div>

          <div className='w-full'>
            <div className='flex w-full justify-between items-center mb-[15px] gap-4'>
              <h4 className='text-[#23283C] text-[24px] font-medium '>
                {categoryData.name}
              </h4>
            </div>

            <h5 className='mb-[10px] text-[#6D7287]'>Sıra</h5>

            <div className='flex mb-[10px] gap-2.5'>
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
                      ? 'bg-[#F5A630] text-white'
                      : 'bg-white border-[#E1E1E1] border'
                  }`}
                >
                  {bazaarDetail.sequenceNumber}
                </div>
              ))}
            </div>

            <h5 className='mb-[10px] text-[#6D7287]'>Mağaza</h5>

            <div className='flex flex-wrap'>
              {group.bazaarDetails
                .find(
                  (bazaarDetail) =>
                    bazaarDetail.sequenceNumber ===
                    selectedSequence[group.bazaarId]
                )
                ?.shopNumbers.map((shopNumber) => (
                  <div
                    className='w-6 h-6 text-[#23283C] rounded-[6px] bg-[#E1E1E1] flex justify-center items-center text-[12px] mr-2 mb-2'
                    key={shopNumber}
                  >
                    {shopNumber}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoryDetail;
