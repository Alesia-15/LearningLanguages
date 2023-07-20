import "./assets/style/App.css";
import "./assets/style/general.scss";
import data from "./assets/data.json";
import Wordlist from "./assets/components/Wordlist/Wordlist";
import Wordcard from "./assets/components/Wordcard/Wordcard";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
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
                english={words.english}
                transcription={words.transcription}
                russian={words.russian}
                topic={words.topic}
                isSelected={words.isSelected}
              ></Wordlist>
            ))}
          </tbody>
        </table>
        <h2 id="cards">Карточки слов</h2>
        <div className="cardsWords">
          {data.map((words) => (
            <Wordcard
              english={words.english}
              transcription={words.transcription}
              russian={words.russian}
              topic={words.topic}
            ></Wordcard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
