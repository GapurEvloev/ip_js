import "./charList.scss";

import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

const CharList = ({selectedChar, onSelectChar}) => {
  const [chars, setChars] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charsEnded, setCharsEnded] = useState(false);

  const {loading, error, getAllCharacters} = useMarvelService();

  useEffect(() => {
    updateAllChars(offset, true);
  }, []);

  const onCharsLoaded = (newChars) => {
    let ended = false;
    if (newChars.length < 9) {
      ended = true;
    }

    setChars(chars => [...chars, ...newChars]);
    setNewItemsLoading(false);
    setOffset(offset => offset + 9);
    setCharsEnded(ended);
  }

  const updateAllChars = (offset, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllCharacters(offset)
      .then(onCharsLoaded);
  };

  const spinner = loading && !newItemsLoading ? <Spinner/> : null;
  const errorMessage = error ? <ErrorMessage/> : null;

  return (
    <div className="char__list">
      {spinner}
      <View chars={chars} selectedChar={selectedChar} onSelectChar={onSelectChar} />
      {errorMessage}
      <button
        disabled={newItemsLoading}
        hidden={charsEnded}
        onClick={() => updateAllChars(offset)}
        className="button button__main button__long"
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

const View = ({chars, onSelectChar, selectedChar}) => {
    return (
      <ul className="char__grid">
        {
          chars.map((char) => {
            return <CharListItem selectedChar={selectedChar} onSelectChar={onSelectChar} key={char.id} {...char}/>
          })
        }
      </ul>
    )
}

CharList.propTypes = {
  onSelectChar: PropTypes.func,
  selectedChar: PropTypes.number,
}

export default CharList;
