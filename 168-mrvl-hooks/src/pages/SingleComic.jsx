import SingleComic from "../components/singleComic/SingleComic";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useMarvelService from "../services/MarvelService";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Spinner from "../components/spinner/Spinner";

const SingleComicPage = () => {
  const [comic, setComic] = useState(null);
  const {loading, error, clearError, getComics} = useMarvelService();

  const {comicId} = useParams();

  useEffect(() => {
    updateComicInfo();
  }, [comicId]);


  const onComicLoaded = (comic) => {
    setComic(comic);
  }

  const updateComicInfo = () => {
    clearError();
    getComics(comicId)
      .then(onComicLoaded);
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error|| !comic) ? <SingleComic comic={comic}/> : null;

  return (
    <>
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};



export default SingleComicPage;
