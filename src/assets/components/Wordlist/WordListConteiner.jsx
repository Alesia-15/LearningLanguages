import React, { useState } from "react";
import data from "../../data.json";
import WordList from "./WordList";
import save from "../../images/save.png";
import close from "../../images/close.png";

function WordListConteiner() {
  // кнопка newWord
  const [createNewWord, setCreateNewWord] = useState(true);
  const handleClickNewWord = () => {
    setCreateNewWord(!createNewWord);
  };

  // состояние инпутов
  let [english, setEnglish] = useState("");
  const handleChangeEnglish = (e) => {
    setEnglish((english = e.target.value));
  };
  let [transcription, setTranscription] = useState("");
  const handleChangeTranscription = (e) => {
    setTranscription((transcription = e.target.value));
  };
  let [russian, setRussian] = useState("");
  const handleChangeRussian = (e) => {
    setRussian((russian = e.target.value));
  };
  let [topic, setTopic] = useState("");
  const handleChangeTopic = (e) => {
    setTopic((topic = e.target.value));
  };

  // состояние валидации
  let [validation, setValidation] = useState("");

  // кнопка сохранить
  let [objWords, setObjWords] = useState([]);
  const handleClickSave = (e) => {
    e.preventDefault();
    if (
      english === "" ||
      transcription === "" ||
      russian === "" ||
      topic === ""
    ) {
      setValidation((validation = "Заполнены не все поля!"));
    } else if (english.match(/^[A-Za-z]+$/gi) === null) {
      setValidation(
        (validation =
          "Английское слово должно содержать только английские буквы!")
      );
    } else if (
      transcription.match(/^\[.+\]$/gi) === null ||
      transcription.match(/[А-Яа-я]/gi) !== null
    ) {
      setValidation(
        (validation = `Транскрипция должна начинаться с "[", заканчиваться "]" и не содержать русские буквы!`)
      );
    } else if (russian.match(/^[А-Яа-я]+$/gi) === null) {
      setValidation(
        (validation = "Перевод должен содержать только русские буквы!")
      );
    } else {
      setObjWords(
        (objWords = {
          english: english,
          transcription: transcription,
          russian: russian,
          topic: topic,
        })
      );
      console.log(objWords);
      setCreateNewWord(!createNewWord);
      setEnglish("");
      setTranscription("");
      setRussian("");
      setTopic("");
      setValidation("");
    }
  };

  //кнопка закрыть
  const handleClickOpenClose = (e) => {
    e.preventDefault();
    setCreateNewWord(!createNewWord);
    setValidation("");
  };

  return (
    <div className="wordListContainer">
      <h2 id="list">Список слов</h2>
      <div className="listContainer">
        <div id="head" className="row">
          <p>Слово</p>
          <p>Транскрипция</p>
          <p>Перевод</p>
          <p>Тема</p>
          <p></p>
        </div>
        {data.map((words) => (
          <WordList
            key={words.id}
            english={words.english}
            transcription={words.transcription}
            russian={words.russian}
            topic={words.topic}
          />
        ))}
        <div className="newWordContainer">
          {createNewWord ? (
            <button className="newWord" onClick={handleClickNewWord}>
              Добавить новое слово
            </button>
          ) : (
            <div className="row">
              <input
                type="text"
                value={english}
                name="english"
                placeholder="Слово"
                onChange={handleChangeEnglish}
                className={`${english === "" ? "empty" : ""}`}
              />
              <input
                type="text"
                value={transcription}
                name="transcription"
                placeholder="[Транскрипция]"
                onChange={handleChangeTranscription}
                className={`${transcription === "" ? "empty" : ""}`}
              />
              <input
                type="text"
                value={russian}
                name="russian"
                placeholder="Перевод"
                onChange={handleChangeRussian}
                className={`${russian === "" ? "empty" : ""}`}
              />
              <input
                type="text"
                value={topic}
                name="topic"
                placeholder="Тема"
                onChange={handleChangeTopic}
                className={`${topic === "" ? "empty" : ""}`}
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
    </div>
  );
}

export default WordListConteiner;
