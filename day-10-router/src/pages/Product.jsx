import React from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(location, "==location");
  return (
    <div className="container">
      {params.id ? (
        <h1>This is a Single Product Page </h1>
      ) : (
        <h1>This is Multi Product Page </h1>
      )}
    </div>
  );
};

export default Product;
