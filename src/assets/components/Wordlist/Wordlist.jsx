import React, { useState } from "react";
import "./wordlist.scss";
import save from "../../images/save.svg";
import pen from "../../images/pen.svg";
import del from "../../images/delete.svg";
import close from "../../images/close.svg";

function Wordlist(props) {
  const [passed, setPassed] = useState(props.passed || false);
  const handleClick = () => {
    setPassed(!passed);
  };
  return (
    <>
      {passed ? (
        <div className="listContainer">
          <input type="text" defaultValue={props.english} />
          <input type="text" defaultValue={props.transcription} />
          <input type="text" defaultValue={props.russian} />
          <input type="text" defaultValue={props.topic} />
          <div className="btn">
            <button>
              <img src={save} alt="save" />
            </button>
            <button onClick={handleClick}>
              <img src={close} alt="close"></img>
            </button>
          </div>
        </div>
      ) : (
        <div className="listContainer">
          <p>{props.english}</p>
          <p>{props.transcription}</p>
          <p>{props.russian}</p>
          <p>{props.topic}</p>
          <div>
            <button onClick={handleClick}>
              <img src={pen} alt="pen"></img>
            </button>
            <button>
              <img src={del} alt="del"></img>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Wordlist;
