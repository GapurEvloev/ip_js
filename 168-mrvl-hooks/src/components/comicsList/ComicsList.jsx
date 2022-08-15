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

const setContent = (process, Component, newItemsLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner/>;
    case "loading":
      return newItemsLoading ? <Component/> : <Spinner/>;
    case "confirmed":
      return <Component/>;
    case "error":
      return <ErrorMessage/>;
    default:
      throw new Error("Unexpected process state");
  }
}

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(210);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);

  const {process, setProcess, getAllComics} = useMarvelService();

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
      .then(onComicsLoaded)
      .then(() => setProcess("confirmed"));
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

  return (
    <div className="comics__list">
      {setContent(process, () => renderItems(comics), newItemsLoading)}
      <button disabled={newItemsLoading} hidden={comicsEnded} onClick={() => updateAllComics(offset)} className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
