import { useContext, useEffect, useState } from "react";
import logo from "../../assets/tcslogo.png";
import avatar from "../../assets/avatar.png";
import "./Header.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from "../../context/Auth";
import { DarkMode } from "../../context/DarkModeContext";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/interceptor";

const Header = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState("dark");

  const Aut = useContext(AuthContext);
  const { ColorMode, handleModeChange } = useContext(DarkMode);

  useEffect(() => {
    setIsDarkMode(ColorMode);
  }, []);

  const handleLogOut = async () => {
    await axiosInstance("/logout");
    Aut.logout();
    localStorage.clear();
    navigate("/login");
  };

  const handleColorMode = (mode) => {
    setIsDarkMode(mode);
    handleModeChange(mode);
  };

  return (
    <div className="header-container">
      <Link to="/home">
        <img className="logo" src={logo} alt="tcs_logo" />
      </Link>
      <Link to="/profile">
        <h1>Profile</h1>
      </Link>

      <div className="header-right">
        <div className="light_dark">
          {isDarkMode == "light" ? (
            <MdDarkMode
              className="color-switch"
              onClick={() => handleColorMode("dark")}
            />
          ) : (
            <MdLightMode
              className="color-switch"
              onClick={() => handleColorMode("light")}
            />
          )}
        </div>
        <div className="avatar-logout" onClick={(e) => handleLogOut()}>
          {/* <div className="btn-logout"> */}
          <p>Log Out</p>
          <img className="avatar" src={avatar} alt="" />
          {/* <RxAvatar className="avatar" color="black" style={{ color: "black", fontSize: "1.5em" }} /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
