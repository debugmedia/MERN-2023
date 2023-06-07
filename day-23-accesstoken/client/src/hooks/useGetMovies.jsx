import { useEffect, useState } from "react";
import { TMDB_MOVIE_LIST_API_, TMDB_SEARCH_API } from "../constants/tmdb-url";
import axios from "axios";
import useDebounce from "./useDebounce";

const useGetMovies = (searchTxt) => {
  const [movieList, setMovieList] = useState([{}]);

  useEffect(() => {
    getMovieList();
  }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (searchTxt != "") {
  //       getSearchData(searchTxt);
  //     } else {
  //       getMovieList();
  //     }
  //   }, delay);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [searchTxt]);

  const getSearchData = async (text) => {
    try {
      const data = await axios(TMDB_SEARCH_API, { params: { query: text } });
      setMovieList(data?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieList = async () => {
    try {
      const data = await axios(TMDB_MOVIE_LIST_API_);
      setMovieList(data?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };

  return { movieList, getSearchData };
};

export default useGetMovies;
