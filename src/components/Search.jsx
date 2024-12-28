import PropTypes from "prop-types";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Pass query to parent component or global context
  };

  return (
    <div>
      <div className="w-full flex justify-center py-4">
        <div className="relative w-full max-w-4xl">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full p-4 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 18l6-6-6-6M18 12H4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
    onSearch: PropTypes.func,
  };

export default Search;
