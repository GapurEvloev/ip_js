import {useHttp} from "../hooks/http.hook";

const useMarvelService = () => {
  const {request, clearError, process, setProcess} = useHttp();
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  // const _apiKey = "apikey=442b090a0f4dd255f6fcd294f5b43aca";
  const _apiKey = "apikey=0d678ce25e624e28cec6dc7dfd448c46";
  const _baseCharsOffset = 210;

  const getAllCharacters = async (offset = _baseCharsOffset) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  }

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  }

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  }

  const getAllComics = async (offset = _baseCharsOffset) => {
    const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformComics);
  }

  const getComics = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  }

  const _transformCharacter = (character) => {
    return {
      id: character.id,
      name: character.name,
      description: character.description ? `${character.description.slice(0, 150)}...` : 'There is no description for this character',
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url,
      comics: character.comics.items,
    }
  }
  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || 'There is no description',
      pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      language: comics.textObjects.language || 'en-us',
      price: comics.prices[0].price ? comics.prices[0].price : 'not available'
    }
  }

  return {clearError, process, setProcess, getAllCharacters, getCharacter, getCharacterByName, getAllComics, getComics}
}

export default useMarvelService;