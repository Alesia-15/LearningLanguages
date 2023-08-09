import React, { useState } from "react";
import "./wordcard.scss";

function Wordcard(props) {
  const [passed, setPassed] = useState(props.passed || false);
  const handleClick = () => {
    setPassed(!passed);
  };

  return (
    <div className="wordCardContainer">
      <button onClick={props.goBack}>&#8656;</button>
      <div>
        <div className="wordCard">
          <h3>{props.english}</h3>
          <div className="transcr">{props.transcription}</div>
          <div className="check">
            {passed ? (
              <div>{props.russian}</div>
            ) : (
              <button onClick={handleClick}>Проверить</button>
            )}
          </div>
        </div>
        <div className="indexCard">{props.index}</div>
      </div>
      <button onClick={props.goForward}>&#8658;</button>
    </div>
  );
}

export default Wordcard;
