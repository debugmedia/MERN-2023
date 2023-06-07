import { useEffect, useRef } from "react";
import Input from "../../components/Input/Input";
import Layout1 from "../../components/layout/Layout1";
import { Link } from "react-router-dom";

const SignUp = () => {
   const nameref = useRef(null);

   useEffect(() => {
      nameref.current.focus();
   }, []);

   return (
      <Layout1>
         <div className="login-container">
            <div className="login-title">
               <p>Sign Up</p>
            </div>
            <form className="login-input-container">
               <div className="input-div">
                  <Input refer={nameref} type={"text"} palaceholder={"Enter your name"} name={"name"} />
               </div>
               <div className="input-div">
                  <Input type={"email"} palaceholder={"Enter your email"} name={"pasword"} />
               </div>
               <div className="input-div">
                  <Input type={"text"} palaceholder={"Enter password"} name={"pasword"} />
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

export default SignUp;
