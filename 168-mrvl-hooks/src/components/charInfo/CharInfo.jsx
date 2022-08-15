import {useEffect, useState} from "react";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import "./charInfo.scss";

const CharInfo = ({charId}) => {
  const [char, setChar] = useState(null);
  const {clearError, process, setProcess, getCharacter} = useMarvelService();

  useEffect(() => {
    updateCharInfo();
  }, [charId]);


  const onCharLoaded = (char) => {
    setChar(char);
  }

  const updateCharInfo = () => {
    if(!charId) {
      return;
    }
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess("confirmed"))
  }

  // const skeleton = char || loading || error ? null : <Skeleton/>;
  // const errorMessage = error ? <ErrorMessage/> : null;
  // const spinner = loading ? <Spinner/> : null;
  // const content = !(loading || error|| !char) ? <View char={char}/> : null;

  return (
    <div className="char__info">
      {setContent(process, View, {char})}
    </div>
  );
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
