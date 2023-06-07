import React, { useEffect, useRef, useState } from "react";
import "../homepage/HomePage.css";
import Header from "../../components/Header/Header";
import { genericError } from "../../utils/genericError";
import { axiosInstance } from "../../utils/interceptor";

function ProfilePage() {
   const abortController = useRef(new AbortController());
   const [username, setUsername] = useState("");

   const fetchProfile = async () => {
      try {
         const response = await axiosInstance("/profile", {
            // This below code is being handle by interceptor (currently)
            // GET is default method, so no need to pass it in this case
            // {
            //     method: "GET",
            //     headers: {
            //       Authorization: localStorage.getItem("token"),
            //       "x-token": localStorage.getItem("reshtoken"),
            //     },
            //   }
            signal: abortController.current.signal,
         });
         setUsername(response.data.username);
      } catch (error) {
         // Error is currently being handle by interceptor, but use genericError
         // If you find interceptor to be complicated
         // genericError(error);
         console.log(error);
      }
   };

   useEffect(() => {
      fetchProfile();

      return () => {
         abortController.current.abort();
      };
   }, []);

   return (
      <div className="home-main">
         <Header />
         <div className="home-container" style={{ paddingTop: "40px", textAlign: "center" }}>
            <h1>User Profile Page of: {username}</h1>
         </div>
      </div>
   );
}

export default ProfilePage;
