import { Component } from "react";

import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";
import MarvelService from "../../services/MarvelService";

class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateRandomChar();
    this.updateAllChars();
  }

  state = {
    char: {},
  };

  marvelService = new MarvelService();

  onCharLoaded = (char) => {
    this.setState({ char });
  };

  updateRandomChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService.getCharacter(id).then(this.onCharLoaded);
  };
  updateAllChars = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService.getAllCharacters().then((res) => console.log(res));
  };

  render() {
    const {
      char: { name, description, thumbnail, homepage, wiki },
    } = this.state;

    const updateDescription = (str, length) => {
      return str
        ? str.length > length
          ? `${str.substring(0, length)}...`
          : str
        : "Marvel character"
    }

    return (
      <div className="randomchar">
        <div className="randomchar__block">
          <img src={thumbnail} alt={name} className="randomchar__img" />
          <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
              {updateDescription(description, 150)}
            </p>
            <div className="randomchar__btns">
              <a href={homepage} className="button button__main">
                <div className="inner">homepage</div>
              </a>
              <a href={wiki} className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

export default RandomChar;
