import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText"><h3>Loading...</h3></span>
    </div>
  );
};

export default Skeleton;
