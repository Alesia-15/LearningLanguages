import { createContext } from "react";
import { useState, useEffect } from "react";
import GET from "./GET";
import POSTadd from "./POSTadd";
import data from "../data.json";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";

export const MyContext = createContext();

function MyContextComponent({ children }) {
  let [words, setWords] = useState([]);
  let [error, setError] = useState("");

  const value = {
    words,
    setWords,
  };

  useEffect(() => {
    getWordsServer();
  }, []);

  async function getWordsServer() {
    const wordsServer = await GET.getWords();
    setWords(wordsServer);
    setError(!wordsServer);
  }

  if (!words) return <Loader></Loader>;

  if (error)
    return <Error status={error.status} statusText={error.statusText}></Error>;

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyContextComponent;
