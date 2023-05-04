import React, { useContext } from "react";
import "./SearchList.css";
import { AuthContext } from "../../../context/AuthContext";
export const SearchList = ({ searchList }) => {
  const { auth } = useContext(AuthContext);
  console.log(auth, "==Inside SearchList");
  return (
    <div
      className="search-list-container"
      style={{ border: "1px solid orange" }}
    >
      {auth && (
        <h2 style={{ color: "white", marginBottom: "10px" }}>
          This is a heading shown after Logged In
        </h2>
      )}

      {searchList.map((data) => (
        <div className="search-items" key={data.id}>
          <img
            width="50"
            height="50"
            style={{ objectFit: "contain" }}
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt=""
          />
          <p className="title">{data.title}</p>
        </div>
      ))}
    </div>
  );
};
