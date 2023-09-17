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

  // состояние инпутов
  let [english, setEnglish] = useState(props.english);
  const handleChangeEnglish = (e) => {
    setEnglish((english = e.target.value));
  };
  let [transcription, setTranscription] = useState(props.transcription);
  const handleChangeTranscription = (e) => {
    setTranscription((transcription = e.target.value));
  };
  let [russian, setRussian] = useState(props.russian);
  const handleChangeRussian = (e) => {
    setRussian((russian = e.target.value));
  };
  let [topic, setTopic] = useState(props.topic);
  const handleChangeTopic = (e) => {
    setTopic((topic = e.target.value));
  };

  // проверка инпутов на пустоту
  const emptyInput = () => {
    if (
      english === "" ||
      transcription === "" ||
      russian === "" ||
      topic === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  // кнопка сохранить
  let [objWords, setObjWords] = useState([]);
  let [disabledSave, setDisabledSave] = useState(emptyInput);
  let handleClickSave = (e) => {
    e.preventDefault();
    if (emptyInput === true) {
      setDisabledSave((disabledSave = true));
    } else {
      setObjWords((objWords = [english, transcription, russian, topic]));
      console.log(objWords);
      setPressed(!pressed);
    }
  };

  return (
    <>
      {pressed ? (
        <div className="listContainer">
          <input
            type="text"
            defaultValue={props.english}
            name="english"
            onChange={handleChangeEnglish}
            className={`${english === "" ? "empty" : ""}`}
          />
          <input
            type="text"
            defaultValue={props.transcription}
            name="transcription"
            onChange={handleChangeTranscription}
            className={`${transcription === "" ? "empty" : ""}`}
          />
          <input
            type="text"
            defaultValue={props.russian}
            name="russian"
            onChange={handleChangeRussian}
            className={`${russian === "" ? "empty" : ""}`}
          />
          <input
            type="text"
            defaultValue={props.topic}
            name="topic"
            onChange={handleChangeTopic}
            className={`${topic === "" ? "empty" : ""}`}
          />
          <div className="btn">
            <button onClick={handleClickSave} disabled={disabledSave}>
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
