import React from "react";
// import ReactLogo from "../assets/react.svg";
import { ReactComponent as ReactLogo } from "../assets/react.svg";

const SvgAsComponent = () => {
  return (
    <div className="container">
      <h4>SvgAsComponent</h4>
      {/* <a href="https://vitejs.dev" target="_blank">
        <img src="vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={ReactLogo} className="logo react" alt="React logo" />
      </a> */}

      <ReactLogo fill="red" />
      <ReactLogo fill="yellow" />
    </div>
  );
};

export default SvgAsComponent;
