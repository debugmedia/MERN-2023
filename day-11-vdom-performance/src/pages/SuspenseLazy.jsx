import React, { useState, Suspense, lazy } from "react";
// import ImageComponent from "../components/ImageComponent";

const ImageComponent = lazy(() => import("../components/ImageComponent"));

const SuspenseLazy = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <h4>Suspense & Lazy</h4>
      {toggle && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <ImageComponent />
        </Suspense>
      )}
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default SuspenseLazy;
