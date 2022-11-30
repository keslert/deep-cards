import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="absolute left-5 top-[15px] text-gray-300">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.66667" cy="7.66667" r="6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.2196 7.66688C11.2196 5.7032 9.62774 4.11133 7.66406 4.11133" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.9965 16.9999L12.5078 12.5112" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <input
        placeholder="Search for a card"
        className="w-full rounded-full py-3 pl-12 pr-8 bg-gray-100 text-gray-800 placeholder:text-gray-400"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Search;
