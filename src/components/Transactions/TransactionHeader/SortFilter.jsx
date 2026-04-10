import { useState } from 'react';
import iconCaretDown from '../../../assets/images/icon-caret-down.svg';

export default function SortFilter({ value, onChange }) {
  const options = [
    { id: 1, value: 'latest', label: 'Latest' },
    { id: 2, value: 'oldest', label: 'Oldest' },
    { id: 3, value: 'a-z', label: 'A to Z' },
    { id: 4, value: 'z-a', label: 'Z to A' },
    { id: 5, value: 'highest', label: 'Highest' },
    { id: 6, value: 'lowest', label: 'Lowest' },
  ];
  const selected = options.find((o) => o.value === value);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-2 items-center relative">
      <span>Sort By</span>
      <button
        className="flex gap-4 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected?.label}
        <img src={iconCaretDown} alt="" />
      </button>
      {isOpen && (
        <ul className="absolute top-full p-4 flex flex-col gap-2 right-0 bg-white shadow-md rounded-lg z-10 min-w-40">
          {options.map((option) => (
            <li
              key={option.id}
              className="border-b text-grey-900 border-grey-100 font4-regular last:border-none"
            >
              <button
                className="cursor-pointer"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
