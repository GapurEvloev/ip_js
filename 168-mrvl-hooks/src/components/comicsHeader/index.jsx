import React from 'react';
import avengersImg from "../../resources/img/Avengers.png";
import avengersLogo from "../../resources/img/Avengers_logo.png";
import "./comicsHeader.scss";

const ComicsHeader = () => {
  return (
    <div className="comics-header">
      <div className="comics-header__avengers">
        <img src={avengersImg} alt="avengers"/>
      </div>
      <h2 className="comics-header__title">
        New comics every week!
        Stay tuned!
      </h2>
      <div className="comics-header__logo">
        <img src={avengersLogo} alt="avengers logo"/>
      </div>
    </div>
  )
}

export default ComicsHeader