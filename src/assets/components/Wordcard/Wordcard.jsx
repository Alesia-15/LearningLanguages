import React, { useState, forwardRef } from "react";
import "./wordcard.scss";

const Wordcard = forwardRef((props, ref) => {
  const [passed, setPassed] = useState(props.passed || false);
  const handleClick = () => {
    setPassed(!passed);
    props.countWords();
  };

  return (
    <div className="wordCard">
      <h3>{props.english}</h3>
      <div className="transcription">{props.transcription}</div>
      <div className="check">
        {passed ? (
          <div>{props.russian}</div>
        ) : (
          <button onClick={handleClick} ref={ref}>
            Проверить
          </button>
        )}
      </div>
    </div>
  );
});

export default Wordcard;
