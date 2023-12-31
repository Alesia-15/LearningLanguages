import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./assets/style/App.scss";
import logo from "./assets/images/logo.png";
import profile from "./assets/images/profile.png";
import Home from "./assets/components/Home/Home";
import WordListConteiner from "./assets/components/Wordlist/WordListConteiner";
import WordCardConteiner from "./assets/components/Wordcard/WordCardConteiner";
import Error from "./assets/components/Error/Error";

function App() {
  return (
    <Router>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li>
                <Link to="/list">Список слов</Link>
              </li>
              <li>
                <Link to="/game">Карточки слов</Link>
              </li>
              <li>
                <Link to="/">
                  <img src={profile} alt="profile" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<WordListConteiner />} />
            <Route path="/game" element={<WordCardConteiner />} />
            <Route path="*" element={<Error text={`Страница не найдена`} />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>Copyright: 2023</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
