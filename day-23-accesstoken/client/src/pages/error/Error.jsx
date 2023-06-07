import { Link, useNavigate } from "react-router-dom";
import "./Error.css";
import Layout1 from "../../components/layout/Layout1";
import { TbError404 } from "react-icons/tb";

const Error = () => {
  return (
    <>
      <Layout1>
        <div className="login-container">
          <div className="login-input-container">
            <TbError404 className="notfound-icon" />
            <div className="button-div"></div>
          </div>
          <div className="error-title">
            <p>Page Not found</p>
          </div>
          <div className="sign-upnav">
            <div>
              <p>
                <Link to="/home">
                  <span>Back to home</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default Error;
