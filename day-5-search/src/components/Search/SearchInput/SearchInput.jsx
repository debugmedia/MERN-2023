import React from "react";
import "./SearchInput.css";

export const SearchInput = ({
  searchInputValue,
  handleChange,
  clearSearch,
}) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        value={searchInputValue}
        placeholder="Search here..."
        onChange={handleChange}
      />

      {searchInputValue && (
        <button onClick={clearSearch}>
          <img
            width="32px"
            height="32px"
            style={{ objectFit: "contain" }}
            src="https://logowik.com/content/uploads/images/close1437.jpg"
            alt=""
          />
        </button>
      )}
    </div>
  );
};
