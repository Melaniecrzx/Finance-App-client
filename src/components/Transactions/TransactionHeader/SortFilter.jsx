import { useState } from 'react';

export default function SortFilter() {
  const options = [
    { id: 1, value: 'latest', label: 'Latest' },
    { id: 2, value: 'oldest', label: 'Oldest' },
    { id: 3, value: 'a-z', label: 'A to Z' },
    { id: 4, value: 'z-a', label: 'Z to A' },
    { id: 5, value: 'highest', label: 'Highest' },
    { id: 6, value: 'lowest', label: 'Lowest' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-2 items-center">
      <span className="text-grey-500 font4-regular">Sort By</span>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {options[0].label}
      </button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option.id}>{option.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
