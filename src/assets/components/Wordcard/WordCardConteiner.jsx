import React, { useState, useRef, useEffect } from "react";
import data from "../../data.json";
import WordCard from "./Wordcard";
import arrowLeft from "../../images/arrowLeft.png";
import arrowRight from "../../images/arrowRight.png";

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
      <div>
        <div className="wordCardContainer">
          <img src={arrowLeft} alt="left" onClick={backClick} />
          <div>
            <WordCard
              key={data[index].id}
              english={data[index].english}
              transcription={data[index].transcription}
              russian={data[index].russian}
              ref={ref}
              countWords={countWords}
            />
          </div>
          <img src={arrowRight} alt="right" onClick={forwardClick} />
        </div>
        <div className="indexCard">{`${data[index].id} / ${data.length}`}</div>
        <div className="learnedWords">{`Выучено слов: ${count}`}</div>
      </div>
    </div>
  );
}

export default WordCardConteiner;
