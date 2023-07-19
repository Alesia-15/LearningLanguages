import "./assets/style/App.css";
import "./assets/style/general.scss";
import Wordlist from "./assets/components/Wordlist";
import Wordcard from "./assets/components/Wordcard";
import Home from "./assets/components/Home";
import data from "./assets/data.json";

console.log(data[0]);

function App() {
  return (
    <>
      <Home></Home>
      <div className="container">
        <h2 className="table">Список слов</h2>
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
        <h2>Карточки слов</h2>
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
    </>
  );
}

export default App;
