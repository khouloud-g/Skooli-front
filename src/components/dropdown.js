import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi"; 

const Dropdown = ({ label, name, options, selectedOption, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[350px]">
      {/* Label (Stays Visible) */}
      <label className="absolute -top-3 left-[34px] text-[17px] bg-white px-1 font-[400] text-labelGray text-bodyMedium [text-shadow:0px_4px_4px_rgba(0,0,0,0.20)]">
        {label}
      </label>

      {/* Clickable Dropdown Field */}
      <div
        className={`w-[350px] h-[60px] p-3 text-[18px] border-[3px] rounded-[8px] flex items-center justify-between cursor-pointer
          ${isOpen ? "border-[#52BD94]" : "border-[#00000024]"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Placeholder (Hidden Until User Selects an Option) */}
        <span className={`text-black text-[18px] ${selectedOption ? "" : "text-gray-400"}`}>
          {selectedOption || ""}
        </span>

        {/* Clickable Icon */}
        <BiChevronDown
          className={`w-6 h-6 text-black opacity-[0.63] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute z-50 w-[350px] text-[18px] bg-white border mt-1 rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="p-3 hover:bg-skooligreen1-19 text-black75 font-medium text-[17px] cursor-pointer"
              onClick={() => {
                onChange(option); // ✅ Only send `option`
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

