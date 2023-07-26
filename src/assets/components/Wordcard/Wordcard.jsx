import React, { useState } from 'react';
import "./wordcard.scss";

function Wordcard(props) {
    const [passed, setPassed] = useState(props.passed || false);
    const handleClick = () => {
      setPassed(!passed);
    };
    return (
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
    );
}

export default Wordcard