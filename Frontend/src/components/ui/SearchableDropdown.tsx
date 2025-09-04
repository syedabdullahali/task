import React, { useState, useRef, useEffect } from "react";
import Spinner from "./Spin";

interface Option {
  id: string | number;
  title: string;
}

interface SearchableDropdownProps {
  label: string;
  value: string | number;
  onChange: (value:  number) => void;
  options: Option[];
  placeholder?: string;
  isLoading?: boolean;
  search:string
  setSearch:(vale:string)=>void
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  label,
  value,
  onChange,
  options,
  setSearch,
  search,
  placeholder = "Select...",
  isLoading = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    onChange(Number(option.id));
    setIsOpen(false);
    setSearch("");
  };

  const selectedOption = options.find((opt) => opt.id === value);

  return (
    <div className="flex flex-col relative" ref={containerRef}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
        <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => {
            if(!isOpen){
                setIsOpen(!isOpen)
            }
        }}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={ selectedOption?.title}
        onClick={() => setIsOpen(!isOpen)}
        disabled
        placeholder={placeholder}
        className="mt-1 block w-full bg-gray-200 p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 cursor-pointer"
      />
      {isOpen && (
        <ul className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg">
          {isLoading ? (
            <li className="p-2 text-gray-500"><Spinner className="-mb-1"/> Loading...</li>
          ) : options.length > 0 ? (
            options.map((opt) => (
              <li
                key={opt.id}
                className="p-2 cursor-pointer hover:bg-blue-100"
                onClick={() => handleSelect(opt)}
              >
                {opt.title}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
