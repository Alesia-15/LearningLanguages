import React from "react";
import "./loader.scss";

function Loader() {
  return (
    <div className="container loader">
      <div className="cssload-loader">
        <div className="cssload-inner cssload-one"></div>
        <div className="cssload-inner cssload-two"></div>
        <div className="cssload-inner cssload-three"></div>
      </div>
    </div>
  );
}

export default Loader;
