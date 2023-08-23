import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./assets/style/App.scss";
import data from "./assets/data.json";
import Wordlist from "./assets/components/Wordlist/Wordlist";
import Wordcard from "./assets/components/Wordcard/Wordcard";

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
    <Router>
      <header>
        <div className="container">
          <Link to="/">
            <h1>Translator EN-RU</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Список слов</Link>
              </li>
              <li>
                <Link to="/game">Карточки слов</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route
              path="/game"
              element={
                <div className="cardsWords">
                  <h2 id="cards">Карточки слов</h2>
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
              }
            />
            <Route
              path="/"
              element={
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
                </div>
              }
            />
          </Routes>
        </div>
      </main>
      <footer>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Список слов</Link>
              </li>
              <li>
                <Link to="/game">Карточки слов</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </Router>
  );
}

export default App;
