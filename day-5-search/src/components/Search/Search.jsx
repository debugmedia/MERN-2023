import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  // Local Filter
  // const [filteredList, setFilteredList] = useState([]);

  // Filter from local array (but the data is initially loaded by the API)
  // const handleChange = (event) => {
  //   setSearchInputValue(event.target.value);

  //   const newFilteredItems = searchList.filter((data) => {
  //     return data.title.toLowerCase().includes(event.target.value);
  //   });
  //   setFilteredList(newFilteredItems);
  // };

  // Filter with API
  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchInputValue("");
    setSearchList([]);
  };

  // Local
  // const fetchSearchList = async (query) => {
  //   try {
  //     const response = await axios(API_URL, {
  //       params: {
  //         query: query,
  //       },
  //     });
  //    // Saving to local array to filter locally
  //    setSearchList(response.data.results);
  //    setFilteredList(response.data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchSearchList = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          query: searchInputValue,
        },
      });
      // Saving to local array to filter locally
      // setFilteredList(response.data.results);
      setSearchList(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInputValue) {
        fetchSearchList();
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInputValue]);

  // Initial
  // useEffect(() => {
  //   fetchSearchList("movie");
  // }, []);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Looking for a movie?</h1>
      </div>
      <SearchInput
        searchList={searchList}
        searchInputValue={searchInputValue}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />
      {/* ❌This will display 0 if the array is empty, DO NOT USE THIS APPROACH */}
      {/* {searchInputValue.length && <SearchList searchList={searchList} />} */}

      {/* ✅ Use This approach instead */}
      {/* {searchInputValue.length > 0 && <SearchList searchList={searchList} />} */}

      <SearchList searchList={searchList} />
    </div>
  );
};
