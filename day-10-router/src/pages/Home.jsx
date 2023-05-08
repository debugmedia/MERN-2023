import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
// 1. Displaying Image via assets folder
import ReactIcon from "../assets/react.svg";

const Home = () => {
  const navigate = useNavigate();

  // Fetching data from .ENV
  console.log(import.meta.env.VITE_AUTH);
  return (
    <Container>
      {/* 2. Displaying Image via public folder */}
      <img src="images/vite.svg" alt="" />
      <h1>Home Page</h1>
      <button onClick={() => navigate("/login")}>Go To Login</button>
    </Container>
  );
};

export default Home;
