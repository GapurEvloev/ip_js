import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../services/MarvelService';
import AppBanner from "../components/appBanner/AppBanner";

import setContent from "../utils/setContent";

// Хотелось бы вынести функцию по загрузке данных как отдельный аргумент
// Но тогда мы потеряем связь со стэйтами загрузки и ошибки
// А если вынесем их все в App.js - то они будут одни на все страницы

const SinglePage = ({Component, dataType}) => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const {process, setProcess, getComics, getCharacter, clearError} = useMarvelService();

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, [id])

  const updateData = () => {
    clearError();

    switch (dataType) {
      case 'comic':
        getComics(id)
          .then(onDataLoaded)
          .then(() => setProcess("confirmed"));
        break;
      case 'character':
        getCharacter(id)
          .then(onDataLoaded)
          .then(() => setProcess("confirmed"));
        break;
      default:
        throw new Error("Unexpected process state");
    }
  }

  const onDataLoaded = (data) => {
    setData(data);
  }

  return (
    <>
      <AppBanner/>
      {setContent(process, Component, {data})}
    </>
  )
}

export default SinglePage;