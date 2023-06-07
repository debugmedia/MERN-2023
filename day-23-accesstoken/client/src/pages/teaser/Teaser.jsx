import { useNavigate, useParams } from "react-router-dom";
import Layout1 from "../../components/layout/Layout1";
import "../teaser/Teaser.css";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import CastCard from "../../components/castCard/CastCard";
import { DarkMode } from "../../context/DarkModeContext";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../context/Auth";
import { API_KEY, TMDB_VIDEO_API } from "../../constants/tmdb-url";

const Teaser = () => {
  const [videoDetails, setVideoDetails] = useState({ videoId: "", title: "" });
  const [castDetails, setCastDetails] = useState([{}]);
  const isDarkMode = useContext(DarkMode);
  const { id } = useParams();
  //const navigate = useNavigate();
  //const Auth=useContext(AuthContext)
  const topref = useRef(null);

  useEffect(() => {
    getVideoDetails();
    getCastDetails();
    topref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const getVideoDetails = async () => {
    try {
      const API = TMDB_VIDEO_API + id + "/videos";
      const data = await axios(API, { params: { api_key: API_KEY } });
      const teaser = data?.data?.results.filter(
        (item) => item.type == "Trailer" || item.type == "Teaser"
      );
      setVideoDetails({ videoId: teaser[0].key, name: teaser[0].name });
    } catch (error) {
      console.error(error);
    }
  };

  const getCastDetails = async () => {
    try {
      const API = TMDB_VIDEO_API + id + "/credits";
      const data = await axios.get(API, { params: { api_key: API_KEY } });
      setCastDetails(data?.data?.cast);
    } catch (error) {
      console.error(error);
    }
  };
  // if (!Auth?.isAuth) {
  //   navigate("/login");
  // }
  return (
    <>
      <div
        className={`home-overlay ${
          isDarkMode?.colorMode == "dark"
            ? "home-overlay"
            : "home-overlay light-mode"
        }`}
      ></div>
      <Header />
      <div className="home-container teaser-container" ref={topref}>
        <div className="main-container">
          <h3>{videoDetails.name}</h3>
          <div className="yt-iframe videowrapper">
            <iframe
              id="player"
              type="text/html"
              width="740"
              height="490"
              allow="autoplay"
              src={`https://www.youtube.com/embed/${videoDetails.videoId}?autoplay=1&modestbranding=1&enablejsapi=1&origin=http://example.com`}
              frameBorder="0"
            ></iframe>
          </div>
          <div>
            <h2>Cast</h2>
          </div>
          <div className="cast-card-container">
            {castDetails?.map((item) => {
              return (
                <CastCard
                  key={item.cast_id}
                  img={item.profile_path}
                  title={item.name}
                  description={item.character}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaser;
