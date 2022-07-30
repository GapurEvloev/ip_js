import "./charList.scss";

import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

class CharList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false,
    newItemsLoading: false,
    offset: 210,
    charsEnded: false,
  }

  componentDidMount() {
    this.updateAllChars();
  }

  marvelService = new MarvelService();

  onCharsLoaded = (newChars) => {
    let ended = false;
    if (newChars.length < 9) {
      ended = true;
    }

    this.setState(({chars, offset}) => ({
        chars: [...chars, ...newChars],
        loading: false,
        newItemsLoading: false,
        offset: offset + 9,
        charsEnded: ended,
    }));
  }

  onCharsLoading = () => {
    this.setState({
      newItemsLoading: true,
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  };

  updateAllChars = (offset) => {
    this.onCharsLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharsLoaded)
      .catch(this.onError);
  };

  render() {
    const {chars, loading, error, newItemsLoading, offset, charsEnded} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <View chars={chars} onSelectChar={this.props.onSelectChar} /> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
      <div className="char__list">
        {spinner}
        {content}
        {errorMessage}
        <button
          disabled={newItemsLoading}
          hidden={charsEnded}
          onClick={() => this.updateAllChars(offset)}
          className="button button__main button__long"
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
};

const View = ({chars, onSelectChar}) => {
  return (
    <ul className="char__grid">
      {
        chars.map(char => {
          return <CharListItem onSelectChar={onSelectChar} key={char.id} {...char}/>
        })
      }
    </ul>
  )
}

CharList.propTypes = {
  onSelectChar: PropTypes.func,
}

export default CharList;
