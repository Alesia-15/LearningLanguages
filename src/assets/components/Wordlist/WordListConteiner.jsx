import React, { useEffect, useState } from "react";
//import data from "../../data.json";
import WordList from "./Wordlist";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import save from "../../images/save.png";
import close from "../../images/close.png";
import { observer, inject } from "mobx-react";

const WordListConteiner = inject(["WordsStore"])(
  observer(({ WordsStore }) => {
    useEffect(() => {
      WordsStore.getWords();
    }, []);

    // кнопка newWord
    const [createNewWord, setCreateNewWord] = useState(true);
    const handleClickNewWord = () => {
      setCreateNewWord(!createNewWord);
    };

    // состояние инпутов
    const [formValues, setFormValues] = useState({
      english: "",
      transcription: "",
      russian: "",
      tags: "",
    });

    // Обработчик изменения для всех полей ввода
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormValues((prevValues) => ({
        ...prevValues, // копируем предыдущее состояние
        [name]: value, // обновляем значение для конкретного поля ввода
      }));
    };

    // состояние валидации
    let [validation, setValidation] = useState("");

    // кнопка сохранить
    let [objWords, setObjWords] = useState([]);
    const handleClickSave = (e) => {
      e.preventDefault();
      if (
        formValues.english === "" ||
        formValues.transcription === "" ||
        formValues.russian === "" ||
        formValues.tags === ""
      ) {
        setValidation((validation = "Заполнены не все поля!"));
      } else if (formValues.english.match(/^[A-Za-z]+$/gi) === null) {
        setValidation(
          (validation =
            "Английское слово должно содержать только английские буквы!")
        );
      } else if (
        formValues.transcription.match(/^\[.+\]$/gi) === null ||
        formValues.transcription.match(/[А-Яа-я]/gi) !== null
      ) {
        setValidation(
          (validation = `Транскрипция должна начинаться с "[", заканчиваться "]" и не содержать русские буквы!`)
        );
      } else if (formValues.russian.match(/^[А-Яа-я]+$/gi) === null) {
        setValidation(
          (validation = "Перевод должен содержать только русские буквы!")
        );
      } else {
        setObjWords(
          (objWords = {
            id: Number(WordsStore.words[WordsStore.words.length - 1].id) + 1,
            english: formValues.english,
            transcription: formValues.transcription,
            russian: formValues.russian,
            tags: formValues.tags,
          })
        );
        WordsStore.addWord(objWords);
        console.log(objWords); // консоль
        setCreateNewWord(!createNewWord);
        setFormValues("");
        setValidation("");
      }
    };

    //кнопка закрыть
    const handleClickOpenClose = (e) => {
      e.preventDefault();
      setCreateNewWord(!createNewWord);
      setValidation("");
    };

    if (WordsStore.isLoading === true) {
      return <Loader />;
    }

    if (
      WordsStore.errorStatus !== 200 ||
      WordsStore.words === null ||
      WordsStore.error !== null
    ) {
      return (
        <Error
          error={WordsStore.error}
          status={WordsStore.errorStatus}
          errorStatusText={WordsStore.errorStatusText}
        />
      );
    }

    return (
      <div className="wordListContainer">
        <h2 id="list">Список слов</h2>
        <div className="listContainer new">
          <div className="newWordContainer">
            {createNewWord ? (
              <button className="newWord" onClick={handleClickNewWord}>
                Добавить новое слово
              </button>
            ) : (
              <div className="row">
                <input
                  type="text"
                  value={formValues.english}
                  name="english"
                  placeholder="Слово"
                  onChange={handleInputChange}
                  className={`${formValues.english === "" ? "empty" : ""}`}
                />
                <input
                  type="text"
                  value={formValues.transcription}
                  name="transcription"
                  placeholder="[Транскрипция]"
                  onChange={handleInputChange}
                  className={`${
                    formValues.transcription === "" ? "empty" : ""
                  }`}
                />
                <input
                  type="text"
                  value={formValues.russian}
                  name="russian"
                  placeholder="Перевод"
                  onChange={handleInputChange}
                  className={`${formValues.russian === "" ? "empty" : ""}`}
                />
                <input
                  type="text"
                  value={formValues.tags}
                  name="tags"
                  placeholder="Тема"
                  onChange={handleInputChange}
                  className={`${formValues.tags === "" ? "empty" : ""}`}
                />
                <div className="btn">
                  <button onClick={handleClickSave}>
                    <img src={save} alt="save" />
                  </button>
                  <button onClick={handleClickOpenClose}>
                    <img src={close} alt="close"></img>
                  </button>
                </div>
              </div>
            )}
            <p>{validation}</p>
          </div>
        </div>
        <div className="listContainer">
          <div id="head" className="row">
            <p>Слово</p>
            <p>Транскрипция</p>
            <p>Перевод</p>
            <p>Тема</p>
            <p></p>
          </div>
          {WordsStore.words.map((word) => (
            <WordList
              key={word.id}
              id={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
            />
          ))}
        </div>
      </div>
    );
  })
);

export default WordListConteiner;
