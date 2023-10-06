import React, { useState, useEffect } from "react";
import "./wordlist.scss";
import save from "../../images/save.png";
import pen from "../../images/pen.png";
import del from "../../images/delete.svg";
import close from "../../images/close.png";
import { observer, inject } from "mobx-react";

const Wordlist = inject(["WordsStore"])(
  observer(({ WordsStore, ...props }) => {
    // открытие / закрытие режима редактирования
    const [pressed, setPressed] = useState(props.pressed || false);
    const handleClickOpenClose = () => {
      setPressed(!pressed);
    };

    // состояние инпутов
    // Создаем объект состояния для хранения значений полей ввода
    const [formValues, setFormValues] = useState({
      english: props.english,
      transcription: props.transcription,
      russian: props.russian,
      tags: props.tags,
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
        formValues.tags === ""
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
        formValues.tags === ""
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
          id: props.id,
          english: formValues.english,
          transcription: formValues.transcription,
          russian: formValues.russian,
          tags: formValues.tags,
        })
      );
      WordsStore.updateWord(objWords);
      console.log(objWords);
      setPressed(!pressed);
      WordsStore.getWords();
    };

    let handleClickDelete = (e) => {
      e.preventDefault();
      const wordToRemove = { id: props.id };
      WordsStore.deleteWord(wordToRemove);
      WordsStore.getWords();
      console.log(props);
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
              className={`${formValues.english === "" ? "empty" : ""}`}
            />
            <input
              type="text"
              defaultValue={props.transcription}
              name="transcription"
              onChange={handleInputChange}
              className={`${formValues.transcription === "" ? "empty" : ""}`}
            />
            <input
              type="text"
              defaultValue={props.russian}
              name="russian"
              onChange={handleInputChange}
              className={`${formValues.russian === "" ? "empty" : ""}`}
            />
            <input
              type="text"
              defaultValue={props.tags}
              name="tags"
              onChange={handleInputChange}
              className={`${formValues.tags === "" ? "empty" : ""}`}
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
            <p>{props.tags}</p>
            <div>
              <button onClick={handleClickOpenClose}>
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
  })
);

export default Wordlist;
