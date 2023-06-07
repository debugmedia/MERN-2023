import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import { TMDB_IMAGE_URL } from "../../constants/tmdb-url";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import { DarkMode } from "../../context/DarkModeContext";
import useGetMovies from "../../hooks/useGetMovies";
import ShimmerUI from "../../components/shimmerUi/ShimmerUI";
import useLocalStorage from "../../hooks/useLocalStorage";
import useDebounce from "../../hooks/useDebounce";
import { debounceDelay } from "../../constants/Constants";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  const { movieList, getMovieList, getSearchData } = useGetMovies();
  useDebounce(
    searchText == "" ? getMovieList : getSearchData,
    searchText,
    debounceDelay
  );

  useEffect(() => {}, [searchText]);

  return (
    <div className="home-main">
      {movieList.length == 1 || movieList.length == 0 ? (
        <ShimmerUI />
      ) : (
        <>
          <div className="home-overlay"></div>
          <Header />
          <div className="home-container">
            <div className="search-containter">
              <input
                type="text"
                className="search-box"
                placeholder="Search for a movie"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="card-container">
              {movieList &&
                movieList.map((item) => {
                  return (
                    <div key={item.id} className="movie-card">
                      <Link to={`/teaser/${item.id}`}>
                        <img src={TMDB_IMAGE_URL + item.poster_path} alt="" />
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
