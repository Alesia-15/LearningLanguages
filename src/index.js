import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import App from "./App";
import { Provider } from "mobx-react";
import WordsStore from "./assets/stores/WordsStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const stores = {
  wordStore: new WordsStore(),
};

root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>
);
