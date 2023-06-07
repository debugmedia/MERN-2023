import { useEffect, useRef } from "react";
import Layout1 from "../../components/layout/Layout1";
import "./ForgotPassword.css";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
   const forgotpwdref = useRef(null);

   useEffect(() => {
      forgotpwdref.current.focus();
   }, []);

   return (
      <Layout1>
         <div className="login-container">
            <div className="login-title">
               <p>Reset Password</p>
            </div>
            <form className="login-input-container">
               <div className="input-div">
                  <Input
                     refer={forgotpwdref}
                     type={"text"}
                     palaceholder={"Enter you email"}
                     name={"ForgotPwd"}
                  />
               </div>
               <div className="button-div">
                  <button type="submit">Submit</button>
               </div>
            </form>
            <div className="sign-upnav">
               <div>
                  <p>
                     <Link to="/login">
                        <span>Back to Login</span>
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </Layout1>
   );
};

export default ForgotPassword;
