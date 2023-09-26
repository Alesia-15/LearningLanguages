import React, { useState, useRef, useEffect, useContext } from "react";
import data from "../../data.json";
import WordCard from "./WordCard";
import arrowLeft from "../../images/arrowLeft.png";
import arrowRight from "../../images/arrowRight.png";
import { MyContext } from "../Context";

function WordCardConteiner() {
  const { words, setWords } = useContext(MyContext);

  // Переключение карточек
  let [index, setIndex] = useState(0);
  const forwardClick = () => {
    index++;
    if (index == words.length) {
      index = "0";
    }
    setIndex(index);
  };
  const backClick = () => {
    index--;
    if (index == "-1") {
      index = words.length - 1;
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
              key={words[index].id}
              english={words[index].english}
              transcription={words[index].transcription}
              russian={words[index].russian}
              ref={ref}
              countWords={countWords}
            />
          </div>
          <img src={arrowRight} alt="right" onClick={forwardClick} />
        </div>
        <div className="indexCard">{`${index} / ${words.length}`}</div>
        <div className="learnedWords">{`Выучено слов: ${count}`}</div>
      </div>
    </div>
  );
}

export default WordCardConteiner;
