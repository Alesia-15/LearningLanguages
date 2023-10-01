import React from "react";
import "./error.scss";

function Error(props) {
  return (
    <div className="error">
      <h1>Whoops!</h1>
      <p>Код ответа:</p>
      <h2>{props.status}</h2>
      <p>{props.errorStatusText}</p>
      <p>{props.error}</p>
    </div>
  );
}

export default Error;
