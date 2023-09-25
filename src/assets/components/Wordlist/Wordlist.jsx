import React, { useState, useContext } from "react";
import "./wordlist.scss";
import save from "../../images/save.png";
import pen from "../../images/pen.png";
import del from "../../images/delete.svg";
import close from "../../images/close.png";
import { MyContext } from "../Context";
import data from "../../data.json";

function Wordlist(props) {
  let { words, setWords } = useContext(MyContext);

  // открытие / закрытие режима редактирования
  const [pressed, setPressed] = useState(props.pressed || false);

  // состояние инпутов
  // Создаем объект состояния для хранения значений полей ввода
  const [formValues, setFormValues] = useState({
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
    topic: props.topic,
  });

  // Обработчик изменения для всех полей ввода
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Обновляем состояние с учетом изменений
    setFormValues((prevValues) => ({
      ...prevValues, // копируем предыдущее состояние
      [name]: value, // обновляем значение для конкретного поля ввода
    }));
    handleChangeSave();
  };

  // проверка инпутов на пустоту
  const emptyInput = () => {
    if (
      formValues.english === "" ||
      formValues.transcription === "" ||
      formValues.russian === "" ||
      formValues.topic === ""
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
      formValues.english === "" ||
      formValues.transcription === "" ||
      formValues.russian === "" ||
      formValues.topic === ""
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
        id: props.length,
        english: formValues.english,
        transcription: formValues.transcription,
        russian: formValues.russian,
        topic: formValues.topic,
      })
    );
    console.log(objWords);
    console.log(props.length);
    setPressed(!pressed);
  };

  console.log(disabledSave);

  // Удаление
  let handleClickDelete = () => {
    let filteredArray = words.filter(
      (value) => value.english !== props.english
    );
    words = filteredArray;
    console.log(filteredArray);
    console.log(words);
  };

  return (
    <>
      {pressed ? (
        <div className="row">
          <input
            type="text"
            defaultValue={props.english}
            name="english"
            onChange={handleInputChange}
            className={`${
              formValues.english === "" || formValues.english === undefined
                ? "empty"
                : ""
            }`}
          />
          <input
            type="text"
            defaultValue={props.transcription}
            name="transcription"
            onChange={handleInputChange}
            className={`${
              formValues.transcription === "" ||
              formValues.transcription === undefined
                ? "empty"
                : ""
            }`}
          />
          <input
            type="text"
            defaultValue={props.russian}
            name="russian"
            onChange={handleInputChange}
            className={`${
              formValues.russian === "" || formValues.russian === undefined
                ? "empty"
                : ""
            }`}
          />
          <input
            type="text"
            defaultValue={props.topic}
            name="topic"
            onChange={handleInputChange}
            className={`${
              formValues.topic === "" || formValues.topic === undefined
                ? "empty"
                : ""
            }`}
          />
          <div className="btn">
            <button onClick={handleClickSave} disabled={disabledSave}>
              <img src={save} alt="save" />
            </button>
            <button
              onClick={() => {
                setPressed(!pressed);
              }}
            >
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
            <button
              onClick={() => {
                setPressed(!pressed);
              }}
            >
              <img src={pen} alt="pen"></img>
            </button>
            <button onClick={handleClickDelete}>
              <img src={del} alt="del"></img>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Wordlist;
