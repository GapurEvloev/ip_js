import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import App from "./components/app/App";
import MarvelService from "./services/MarvelService";

const marvelService = new MarvelService();

marvelService.getAllCharacters().then(res => {
  console.log(res);
})
marvelService.getCharacter(1011052).then(res => {
  res.data.results.forEach(item => {
    console.log(item.name);
  })
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
