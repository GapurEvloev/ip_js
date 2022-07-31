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

  itemRefs = [];

  setRef = (ref) => {
    this.itemRefs.push(ref);
  }

  focusOnItem = (id) => {
    // Я реализовал вариант чуть сложнее, и с классом и с фокусом
    // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
    // На самом деле, решение с css-классом можно сделать, вынеся персонажа
    // в отдельный компонент. Но кода будет больше, появится новое состояние
    // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

    // По возможности, не злоупотребляйте рефами, только в крайних случаях
    this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
    this.itemRefs[id].classList.add('char__item_selected');
    this.itemRefs[id].focus();
    // console.log(this.itemRefs);
  }

  render() {
    const {chars, loading, error, newItemsLoading, offset, charsEnded} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <View propRef={this.setRef} chars={chars} onSelectChar={this.props.onSelectChar} focusOnItem={this.focusOnItem} /> : null;
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

class View extends Component {
  render() {
    const {chars, onSelectChar, propRef, focusOnItem} = this.props;
    return (
      <ul className="char__grid">
        {
          chars.map((char, i) => {
            return <CharListItem propRef={propRef} i={i} focusOnItem={focusOnItem} onSelectChar={onSelectChar} key={char.id} {...char}/>
          })
        }
      </ul>
    )
  }
}

CharList.propTypes = {
  onSelectChar: PropTypes.func,
}

export default CharList;
