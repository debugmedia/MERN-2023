import "./LogIn.css";
// import logo from "../../assets/tcslogo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import Layout1 from "../../components/layout/Layout1";
import Input from "../../components/Input/Input";
import useHandleChange from "../../hooks/useHandleChange";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../../utils/interceptor";

const LogIn = () => {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();

  const usernameref = useRef(null);
  const { formData, handleInputChange: customHandleChange } = useHandleChange(
    {}
  );

  useEffect(() => {
    usernameref.current.focus();
  }, []);
  console.log(formData);
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance("/login", {
        method: "POST",
        withCredentials: true,
        data: formData,
      });
      toast.success("Successfuly logged in");
      localStorage.setItem("token", response.data.accessToken);
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    customHandleChange(e);
  };

  return (
    <>
      <Layout1>
        <div className="login-container">
          <div className="login-title">
            <p>Sign In</p>
          </div>
          <form className="login-input-container">
            <div className="input-div">
              <Input
                refer={usernameref}
                type={"text"}
                palaceholder={"User Name"}
                name={"username"}
                onchange={handleInputChange}
              />
            </div>
            <div className="input-div">
              <Input
                type={"password"}
                palaceholder={"Password"}
                name="password"
                onchange={handleInputChange}
              />
              <div>
                <span className="error error-username">{Auth.authError}</span>
              </div>
            </div>
            <div className="button-div">
              <button type="button" onClick={handleLogin}>
                Sign In
              </button>
            </div>
            <Link to="/forgotpassword">
              <div className="forgot-pwd">
                <p>Forgot Password?</p>
              </div>
            </Link>
          </form>
          <div className="sign-upnav">
            <div>
              <p>
                New to CinemaSpot?
                <Link to="/signup">
                  <span className="signup-link"> Sign Up Now</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Layout1>
      <ToastContainer />

      {/* </div> */}
    </>
  );
};

export default LogIn;
