import "./comicsList.scss";
import {useEffect, useState} from "react";
import useMarvelService from "../../services/MarvelService";
import ComicsItem from "./ComicsListItem";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

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
        <ComicsItem key={i} {...item} />
      )
    })

    return (
      <ul className="comics__grid">
        {items}
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
