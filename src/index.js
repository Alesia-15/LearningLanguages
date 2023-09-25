import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import App from "./App";
import WordsContextComponent from "./assets/components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <WordsContextComponent>
    <App />
  </WordsContextComponent>
);
