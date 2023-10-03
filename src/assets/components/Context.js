import { createContext } from "react";
import { useState, useEffect } from "react";
import GET from "./GET";
//import data from "../data.json";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";

export const MyContext = createContext();

function MyContextComponent({ children }) {
  let [words, setWords] = useState([]);
  let [error, setError] = useState("");
  let [index, setIndex] = useState(0);

  async function addWord(newWord) {
    try {
      const response = await fetch(
        `https://itgirlschool.justmakeit.ru/api/words/add`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(newWord),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  function updateWord(editWord) {
    fetch(
      `https://itgirlschool.justmakeit.ru/api/words/${editWord.id}/update`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(editWord),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      /* .then((response) => {
        const indexEditWord = words.findIndex((el) => el.id === editWord.id);
        words[indexEditWord] = response;
        console.log(words);
      }) */
      .catch((error) => {
        console.error(error);
      });
  }

  async function deleteWord(removeWord) {
    try {
      const response = await fetch(
        `https://itgirlschool.justmakeit.ru/api/words/${removeWord.id}/delete`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(removeWord),
        }
      );
      return response.json();
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
