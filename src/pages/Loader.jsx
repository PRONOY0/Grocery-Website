import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="LOADER-CONTAINER">
      <div id="page">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="h3">loading</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
