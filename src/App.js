import React, { useState } from "react";
import "./assets/style/App.css";
import data from "./assets/data.json";
import Wordlist from "./assets/components/Wordlist/Wordlist";
import Wordcard from "./assets/components/Wordcard/Wordcard";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";

function App() {
  // defaultProps
  Wordcard.defaultProps = {
    id: 1,
    english: "language",
    transcription: "[ˈlæŋɡwɪdʒ]",
    russian: "язык",
    topic: "существительное",
  };

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

  return (
    <>
      <Header />
      <div className="container">
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
              <Wordlist
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
        <h2 id="cards">Карточки слов</h2>
        <div className="cardsWords"></div>
        <Wordcard
          key={data[index].id}
          english={data[index].english}
          transcription={data[index].transcription}
          russian={data[index].russian}
          goBack={backClick}
          goForward={forwardClick}
          index={`${data[index].id} / ${data.length}`}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
