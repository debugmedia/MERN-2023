import { Link } from "react-router-dom";
import logo from "../../assets/tcslogo.png";
import './Layout1.css'

const Layout1 = ({ children }) => {
  return (
    <div className="login">
      <div className="overlay"></div>
      <div className="tcs-logo-container">
       <Link to='/home'> <img className="tcs-logo" src={logo} alt="tsc logo" /></Link>
      </div>
      {children}
    </div>
  );
};

export default Layout1;
