import React from "react";
import "./loader.scss";

function Loader() {
  return (
    <div className="container loader">
      <div class="cssload-loader">
        <div class="cssload-inner cssload-one"></div>
        <div class="cssload-inner cssload-two"></div>
        <div class="cssload-inner cssload-three"></div>
      </div>
    </div>
  );
}

export default Loader;
