import "./charList.scss";

import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updateAllChars();
  }

  marvelService = new MarvelService();

  onCharsLoaded = (chars) => {
    this.setState({
      chars,
      loading: false
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  };

  updateAllChars = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharsLoaded)
      .catch(this.onError);
  };

  render() {
    const {chars, loading, error} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <View chars={chars} /> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
      <div className="char__list">
        {spinner}
        {content}
        {errorMessage}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
};

const View = ({chars}) => {
  return (
    <ul className="char__grid">
      {
        chars.map(char => {
          return <CharListItem key={char.name} {...char}/>
        })
      }
    </ul>
  )
}

export default CharList;
