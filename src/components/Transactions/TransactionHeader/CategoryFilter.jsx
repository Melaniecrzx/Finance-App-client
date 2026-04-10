import { useState } from 'react';
import iconCaretDown from '../../../assets/images/icon-caret-down.svg';

export default function CategoryFilter({ value, onChange }) {
  const category = [
    { id: 1, value: 'all', label: 'All Transactions' },
    { id: 2, value: 'entertainement', label: 'Entertainment' },
    { id: 3, value: 'bills', label: 'Bills' },
    { id: 4, value: 'groceries', label: 'Groceries' },
    { id: 5, value: 'dining', label: 'Dining Out' },
    { id: 6, value: 'transportation', label: 'Transportation' },
    { id: 7, value: 'personalCare', label: 'Personal Care' },
  ];

  const selected = category.find((c) => c.value === value);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>Category</span>
        <div className="flex gap-4">
          {selected?.label}
          <img src={iconCaretDown} alt="" />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute top-full p-4 flex flex-col gap-2 right-0 bg-white shadow-md rounded-lg z-10 min-w-40">
          {category.map((c) => (
            <li
              key={c.id}
              className="border-b text-grey-900 border-grey-100 font4-regular last:border-none"
            >
              <button
                className="cursor-pointer"
                onClick={() => {
                  onChange(c.value);
                  setIsOpen(false);
                }}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
