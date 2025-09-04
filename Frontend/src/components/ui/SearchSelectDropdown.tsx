import React, { useState, useRef, useEffect } from "react";
import Spinner from "./Spin";

interface Option {
  id: number;
  title: string;
}

interface SearchSelectDropdownProps {
  label: string;
  value: number[]; 
  onChange: (value: number[]) => void;
  options: Option[];
  placeholder?: string;
  isLoading?: boolean;
  search: string;
  setSearch: (value: string) => void;
  onAdd: (value: { title: string }) => void;
}

const SearchSelectDropdown: React.FC<SearchSelectDropdownProps> = ({
  label,
  value,
  onChange,
  options,
  setSearch,
  search,
  placeholder = "Select...",
  isLoading = false,
  onAdd,
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
  }, [setSearch]);

  const handleSelect = (option: Option) => {
    if (!value.includes(option.id)) {
      onChange([...value, option.id]);
    }
    setIsOpen(false);
    setSearch("");
  };

  const handleRemove = (id: number) => {
    onChange(value.filter((v) => v !== id));
  };



  const filteredOptions = options.filter(
    (opt) => opt.title.toLowerCase().includes(search.toLowerCase()) && !value.includes(opt.id)
  );

  return (
    <div className="flex flex-col relative" ref={containerRef}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
       <div className="border rounded-md">
      <div
        className="w-full px-4 py-2  rounded-xl cursor-pointer flex flex-wrap gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          placeholder={placeholder}
          className="flex-1 min-w-[100px] outline-none border-b border-gray-300  py-2"
        />
      </div>
      <div className="w-full px-4 py-2 rounded-xl cursor-pointer flex flex-wrap gap-2">
           {value.map((id) => {
          const selectedOption = options.find((opt) => opt.id === id);
          return (
            <span
              key={id}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center gap-1"
            >
              {selectedOption?.title}
              <button type="button" onClick={() => handleRemove(id)}>
                &times;
              </button>
            </span>
          );
        })}
      </div>
     </div>

      {isOpen && (
        <ul className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg">
          {isLoading ? (
            <li className="p-2 text-gray-500">
              <Spinner className="-mb-1" /> Loading...
            </li>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
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

export default SearchSelectDropdown;
