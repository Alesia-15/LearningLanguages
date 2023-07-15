import "./assets/style/App.css";
import Wordlist from "./assets/components/Wordlist";
import Wordcard from "./assets/components/Wordcard";
import Home from "./assets/components/Home";

const data = [
  {
    word: "слово",
    meaning: "значение",
    transcription: "транскрипция",
    translation: "перевод",
    topic: "тема",
  },
  {
    word: "слово",
    meaning: "значение",
    transcription: "транскрипция",
    translation: "перевод",
    topic: "тема",
  },
  {
    word: "слово",
    meaning: "значение",
    transcription: "транскрипция",
    translation: "перевод",
    topic: "тема",
  },
  {
    word: "длинное-длинное слово",
    meaning: "большое и длинное-длинное значение",
    transcription: "транскрипция",
    translation: "перевод",
    topic: "тема",
  },
  {
    word: "слово",
    meaning: "значение",
    transcription: "транскрипция",
    translation: "перевод",
    topic: "тема",
  },
];

function App() {
  return (
    <div className="container">
      <Home></Home>
      <h2 className="table">Список слов</h2>
      <>
        {data.map((words) => (
          <Wordlist
            word={words.word}
            meaning={words.meaning}
            transcription={words.transcription}
            translation={words.translation}
            topic={words.topic}
          ></Wordlist>
        ))}
      </>
      <h2>Карточки слов</h2>
      <div className="cardsWords">
        {data.map((words) => (
          <Wordcard
            word={words.word}
            meaning={words.meaning}
            transcription={words.transcription}
            translation={words.translation}
            topic={words.topic}
          ></Wordcard>
        ))}
      </div>
    </div>
  );
}

export default App;
