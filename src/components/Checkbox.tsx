'use client';

import { FC } from 'react';

interface IProps {
  checked: boolean;
  onChange: () => void;
}

export default function Checkbox({ checked, onChange }: IProps) {
  return (
    <label className='inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        className='hidden peer'
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-6 h-6 rounded-lg border-2 ${
          checked
            ? 'bg-[rgba(245,166,48,1)] border-[rgba(245,166,48,1)]'
            : 'border-[rgba(225, 225, 225, 1)]'
        } transition-all flex items-center justify-center`}
      >
        {checked && (
          <svg
            className='w-4 h-4 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 13l4 4L19 7'
            />
          </svg>
        )}
      </div>
    </label>
  );
}
