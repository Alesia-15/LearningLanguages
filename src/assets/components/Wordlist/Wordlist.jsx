import React, { useState } from "react";
import "./wordlist.scss";
import save from "../../images/save.svg";
import pen from "../../images/pen.svg";
import del from "../../images/delete.svg";
import close from "../../images/close.svg";

function Wordlist(props) {
  // открытие / закрытие режима редактирования
  const [pressed, setPressed] = useState(props.pressed || false);
  const handleClickOpenClose = () => {
    setPressed(!pressed);
  };

  // input с проверкой на пустоту
  function getInput(el) {
    return (
      <input
        type="text"
        defaultValue={el}
        className={`${el === "" ? "empty" : ""}`}
      />
    );
  }

  return (
    <>
      {pressed ? (
        <div className="listContainer">
          {getInput(props.english)}
          {getInput(props.transcription)}
          {getInput(props.russian)}
          {getInput(props.topic)}
          <div className="btn">
            <button>
              <img src={save} alt="save" />
            </button>
            <button onClick={handleClickOpenClose}>
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
            <button onClick={handleClickOpenClose}>
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
