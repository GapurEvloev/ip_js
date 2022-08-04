import {useHttp} from "../hooks/http.hook";

const useMarvelService = () => {
  const {loading, error, request, clearError} = useHttp();
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=442b090a0f4dd255f6fcd294f5b43aca";
  const _baseCharsOffset = 210;

  const getAllCharacters = async (offset = _baseCharsOffset) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  }

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
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

  return {loading, error, clearError, getAllCharacters, getCharacter}
}

export default useMarvelService;