import React, { useState, useRef, useEffect } from "react";
import data from "../../data.json";
import WordCard from "./WordCard";

function WordCardConteiner() {
  // Переключение карточек
  let [index, setIndex] = useState(data.index || 0);
  const forwardClick = () => {
    index++;
    if (index == data.length) {
      index = "0";
    }
    setIndex(index);
  };
  const backClick = () => {
    index--;
    if (index == "-1") {
      index = data.length - 1;
    }
    setIndex(index);
  };

  // Фокус кнопки "Проверить"
  const ref = useRef();
  useEffect(() => ref.current.focus(), [index]);

  // Выучено слов
  let [count, setCount] = useState(0);
  const countWords = () => {
    count++;
    setCount(count);
  };

  return (
    <div className="wordsCards">
      <h2 id="cards">Карточки слов</h2>
      <div className="wordCardContainer">
        <button onClick={backClick}>&#8656;</button>
        <div>
          <WordCard
            key={data[index].id}
            english={data[index].english}
            transcription={data[index].transcription}
            russian={data[index].russian}
            ref={ref}
            countWords={countWords}
          />
          <div className="indexCard">{`${data[index].id} / ${data.length}`}</div>
          <div className="learnedWords">{`Выучено слов: ${count}`}</div>
        </div>
        <button onClick={forwardClick}>&#8658;</button>
      </div>
    </div>
  );
}

export default WordCardConteiner;
