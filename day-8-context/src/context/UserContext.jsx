import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);

  // console.log(auth, "Calling Auth from User Context");

  return (
    <UserContext.Provider value={{ name: "MERN" }}>
      {children}
    </UserContext.Provider>
  );
};
