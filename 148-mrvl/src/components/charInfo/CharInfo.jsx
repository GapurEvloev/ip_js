import {Component} from "react";
import PropTypes from "prop-types";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import "./charInfo.scss";

class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateCharInfo();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.charId !== prevProps.charId) {
      this.updateCharInfo();
    }
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false
    })
  }

  onCharLoading() {
    this.setState({
      loading: true,
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updateCharInfo() {
    const {charId} = this.props;
    if(!charId) {
      return;
    }
    this.onCharLoading();
    this.marvelService
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {
    const {char, loading, error} = this.state;

    const skeleton = loading || error ||  char ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error|| !char) ? <View char={char}/> : null;

    return (
      <div className="char__info">
        {skeleton}
        {spinner}
        {errorMessage}
        {content}
      </div>
    );
  }
};

const View = ({char}) => {
  const {thumbnail, name, description, homepage, wiki, comics} = char;

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {description}
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {
          comics.length > 0 ?
          comics.slice(0, 10).map((item, i) => (
            <li key={i} className="char__comics-item">
              {item.name}
            </li>
          )) : "Not found"
        }
      </ul>
    </>
  )
}

CharInfo.propTypes = {
  charId: PropTypes.number,
}

export default CharInfo;
