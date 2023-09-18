import React, { useState } from "react";
import "./wordlist.scss";
import save from "../../images/save.png";
import pen from "../../images/pen.png";
import del from "../../images/delete.svg";
import close from "../../images/close.png";

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
    handleChangeSave();
  };
  let [transcription, setTranscription] = useState(props.transcription);
  const handleChangeTranscription = (e) => {
    setTranscription((transcription = e.target.value));
    handleChangeSave();
  };
  let [russian, setRussian] = useState(props.russian);
  const handleChangeRussian = (e) => {
    setRussian((russian = e.target.value));
    handleChangeSave();
  };
  let [topic, setTopic] = useState(props.topic);
  const handleChangeTopic = (e) => {
    setTopic((topic = e.target.value));
    handleChangeSave();
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

  function handleChangeSave() {
    if (
      english === "" ||
      transcription === "" ||
      russian === "" ||
      topic === ""
    ) {
      setDisabledSave((disabledSave = true));
    } else {
      setDisabledSave((disabledSave = false));
    }
  }

  let handleClickSave = (e) => {
    e.preventDefault();
    setObjWords(
      (objWords = {
        english: english,
        transcription: transcription,
        russian: russian,
        topic: topic,
      })
    );
    console.log(objWords);
    setPressed(!pressed);
  };

  return (
    <>
      {pressed ? (
        <div className="row">
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
        <div className="row">
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
