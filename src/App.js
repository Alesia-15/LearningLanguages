import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./assets/style/App.scss";
import WordListConteiner from "./assets/components/Wordlist/WordListConteiner";
import WordCardConteiner from "./assets/components/Wordcard/WordCardConteiner";
import Error from "./assets/components/Error/Error";

function App() {
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
            <Route path="/" element={<WordListConteiner />} />
            <Route path="/game" element={<WordCardConteiner />} />
            <Route path="*" element={<Error />} />
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
