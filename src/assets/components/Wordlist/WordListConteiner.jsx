import React, { useState } from "react";
import data from "../../data.json";
import WordList from "./WordList";

function WordListConteiner() {
  return (
    <div className="wordListContainer">
      <h2 id="list">Список слов</h2>
      <table className="wordList">
        <thead>
          <tr>
            <td>Слово</td>
            <td>Транскрипция</td>
            <td>Перевод</td>
            <td>Тема</td>
            <td>Редактирование</td>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}

export default WordListConteiner;
