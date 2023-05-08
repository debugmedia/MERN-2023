import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";

const About = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>About Page</h1>
      <button onClick={() => navigate("/product?companyName=debug")}>
        Go To Product with Query Params
      </button>
      <button onClick={() => navigate("/product")}>Go To Product</button>
      <button onClick={() => navigate("/product/123")}>
        Go To Product with ID
      </button>
      <button
        onClick={() =>
          navigate("/product/123", {
            state: {
              age: "1",
              obj: {
                name: "debug",
              },
            },
          })
        }
      >
        Go To Product with State
      </button>
    </Container>
  );
};

export default About;
