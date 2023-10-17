import { createContext } from "react";
import { useState, useEffect } from "react";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";

export const MyContext = createContext();

function MyContextComponent({ children }) {
  let [words, setWords] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState("");
  let [errorStatus, setErrorStatus] = useState("");
  let [errorStatusText, setErrorStatusText] = useState("");

  const url = "/api/words";

  async function getWords() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      setErrorStatus(response.status);
      setErrorStatusText(response.statusText);
      const data = await response.json();
      setWords(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    getWords();
  }, []);

  async function addWord(newWord) {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}/add`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newWord),
      });
      getWords();
      setErrorStatus(response.status);
      setErrorStatusText(response.statusText);
      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  async function updateWord(editWord) {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}/${editWord.id}/update`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(editWord),
      });
      getWords();
      setErrorStatus(response.status);
      setErrorStatusText(response.statusText);
      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  async function deleteWord(removeWord) {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}/${removeWord.id}/delete`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(removeWord),
      });
      getWords();
      setErrorStatus(response.status);
      setErrorStatusText(response.statusText);
      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  const value = {
    words,
    setWords,
    addWord,
    updateWord,
    deleteWord,
  };

  if (isLoading === true) return <Loader></Loader>;

  if (errorStatus !== 200 || words === null || error !== "") {
    return (
      <Error
        text={"Код ответа:"}
        error={error}
        status={errorStatus}
        errorStatusText={errorStatusText}
      />
    );
  }

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyContextComponent;
