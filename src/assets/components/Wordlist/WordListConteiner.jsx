import React, { useState } from "react";
import data from "../../data.json";
import WordList from "./WordList";

function WordListConteiner() {
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
          isSelected={words.isSelected}
        />
      ))}
    </div>
  );
}

export default WordListConteiner;
