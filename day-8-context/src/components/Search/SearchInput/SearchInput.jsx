import React, { useContext } from "react";
import "./SearchInput.css";
import { AuthContext } from "../../../context/AuthContext";
import { UserContext } from "../../../context/UserContext";

export const SearchInput = ({
  searchInputValue,
  handleChange,
  clearSearch,
}) => {
  const { auth, toggleAuth } = useContext(AuthContext);
  const { name } = useContext(UserContext);

  return (
    <div
      className="search-input-container"
      style={{ border: "1px solid green" }}
    >
      {auth && (
        <h1 style={{ color: "white", marginBottom: "10px" }}>
          Welcome Debug Media
        </h1>
      )}

      <button
        style={{ backgroundColor: "white", padding: "10px" }}
        onClick={toggleAuth}
      >
        Toggle Auth
      </button>

      <input
        type="text"
        value={searchInputValue}
        placeholder="Search here..."
        onChange={handleChange}
      />

      {searchInputValue && (
        <button onClick={clearSearch}>
          <img
            width="32"
            height="32"
            style={{ objectFit: "contain" }}
            src="https://logowik.com/content/uploads/images/close1437.jpg"
            alt=""
          />
        </button>
      )}
    </div>
  );
};
