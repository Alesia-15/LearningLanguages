import { createContext } from "react";
import { useState, useEffect } from "react";
import GET from "./GET";
import data from "../data.json";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";

export const MyContext = createContext();

function MyContextComponent({ children }) {
  let [words, setWords] = useState([]);
  let [error, setError] = useState("");
  let [index, setIndex] = useState(0);

  async function addWord(newWord) {
    try {
      const responce = await fetch(
        `https://itgirlschool.justmakeit.ru/api/words/${words.length + 1}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(newWord),
        }
      );
      return responce.json();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateWord(editWord) {
    await fetch(`https://itgirlschool.justmakeit.ru/api/words/${editWord.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(editWord),
    });
  }

  async function deleteWord(removeWord) {
    try {
      const responce = await fetch(
        `https://itgirlschool.justmakeit.ru/api/words/${removeWord.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(removeWord),
        }
      );
      return responce.json();
    } catch (error) {
      console.error(error);
    }
  }

  const value = {
    words,
    setWords,
    index,
    setIndex,
    addWord,
    updateWord,
    deleteWord,
  };

  useEffect(() => {
    getWords();
  }, []);

  async function getWords() {
    const wordsArr = await GET.getWords();
    setWords(wordsArr);
    setError(!wordsArr);
  }

  if (!words) return <Loader></Loader>;

  if (error)
    return <Error status={error.status} statusText={error.statusText}></Error>;

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyContextComponent;
