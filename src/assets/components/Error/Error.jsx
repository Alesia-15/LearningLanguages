import React from "react";
import "./error.scss";

function Error(props) {
  return (
    <div className="error">
      <h1>Whoops!</h1>
      <h2>404</h2>
      <p>Страница не найдена</p>
      <p>
        {props.status} {props.statusText}
      </p>
    </div>
  );
}

export default Error;
