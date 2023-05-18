import React from "react";

const Container = ({ children, className = "container" }) => {
   return <div className={className}>{children}</div>;
};

export default Container;
