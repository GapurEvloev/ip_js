import "./comicsList.scss";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import ComicsItem from "./ComicsListItem";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';


const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(210);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);

  const {loading, error, getAllComics} = useMarvelService();

  useEffect(() => {
    updateAllComics(offset, true);
  }, []);

  const onComicsLoaded = (newComics) => {
    let ended = false;
    if (newComics.length < 8) {
      ended = true;
    }

    setComics(comics => [...comics, ...newComics]);
    setNewItemsLoading(false);
    setOffset(offset => offset + 8);
    setComicsEnded(ended);
  }

  const updateAllComics = (offset, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllComics(offset)
      .then(onComicsLoaded);
  };

  function renderItems (arr) {
    const items = arr.map((item, i) => {
      return (
        <CSSTransition key={i}  timeout={500} classNames="comics__item">
          <ComicsItem {...item} />
        </CSSTransition>
      )
    })

    return (
      <ul className="comics__grid">
        <TransitionGroup component={null}>
          {items}
        </TransitionGroup>
      </ul>
    )
  }

  const items = renderItems(comics);
  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading && !newItemsLoading ? <Spinner/> : null;

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      {items}
      <button disabled={newItemsLoading} hidden={comicsEnded} onClick={() => updateAllComics(offset)} className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
