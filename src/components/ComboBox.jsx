import PropTypes from "prop-types";

const ComboBox = ({
  options,
  label,
  query,
  handleQuery,
  handleSelect,
  isOpen,
  handleOpen,
}) => {
  // Filter options based on the search query
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="relative">
        <label
          htmlFor="comboBox"
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => handleOpen(!isOpen)}
            placeholder="Search"
            id="comboBox"
            type="text"
          />
        </div>

        {/* Dropdown list */}
        {isOpen && (
          <ul className="absolute left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

ComboBox.propTypes = {
  options: PropTypes.array,
  setValue: PropTypes.any,
  label: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.any,
  handleSelect: PropTypes.func,
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
  handleQuery: PropTypes.func,
  query: PropTypes.string,
};

export default ComboBox;
