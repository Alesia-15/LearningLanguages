import React, { useState } from "react";
import data from "../../data.json";
import WordList from "./WordList";
import save from "../../images/save.svg";
import close from "../../images/close.svg";

function WordListConteiner() {
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
      alert("Заполнены не все поля!");
    } else {
      setObjWords((objWords = [english, transcription, russian, topic]));
      console.log(objWords);
      setCreateNewWord(!createNewWord);
    }
  };

  //кнопка закрыть
  const handleClickOpenClose = (e) => {
    e.preventDefault();
    setCreateNewWord(!createNewWord);
  };

  return (
    <div className="wordListContainer">
      <h2 id="list">Список слов</h2>
      <div id="head" className="listContainer">
        <p>Слово</p>
        <p>Транскрипция</p>
        <p>Перевод</p>
        <p>Тема</p>
        <p>Редактирование</p>
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
      <div>
        {createNewWord ? (
          <button className="newWord" onClick={handleClickNewWord}>
            Добавить новое слово
          </button>
        ) : (
          <div className="listContainer">
            <input
              type="text"
              value={english}
              name="english"
              onChange={handleChangeEnglish}
              className={`${english === "" ? "empty" : ""}`}
            />
            <input
              type="text"
              value={transcription}
              name="transcription"
              onChange={handleChangeTranscription}
              className={`${transcription === "" ? "empty" : ""}`}
            />
            <input
              type="text"
              value={russian}
              name="russian"
              onChange={handleChangeRussian}
              className={`${russian === "" ? "empty" : ""}`}
            />
            <input
              type="text"
              value={topic}
              name="topic"
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
      </div>
    </div>
  );
}

export default WordListConteiner;
