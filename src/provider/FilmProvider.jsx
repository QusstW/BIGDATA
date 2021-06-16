import React, { createContext, useState } from "react";
import ApiService from "../apis/ApiService";
export const FilmContext = createContext();

export default function FilmProvider(props) {
  //массив фильмов
  const [films, setFilms] = useState([]);

  //состояние стартовой страницы
  const [startPage, setStartPage] = useState(true);

  //текущая страница для запроса api
  const [pageNumber, setPageNumber] = useState(1);
  //текущий фильм
  const [currentFilm, setCurrentFilm] = useState();

  const [loading, setLoading] = useState(false);

  //Функция загрузки новой порции фильмов
  const loadNextFilms = () => {
    ApiService.getFilms(pageNumber).then((res) => {
      setFilms((oldValue) => {
        addCommentField(res);
        setPageNumber(pageNumber + 1);
        setLoading(false);
        console.log(loading);
        console.log(pageNumber);
        return [...oldValue, ...res];
      });
    });
  };

  // функция добавляет поле comments к каждому объекту текущей порции
  const addCommentField = (films) => {
    return films.forEach((f) => {
      f.comments = [];
    });
  };

  const loadCurrentFilm = (currentFilm) => {
    ApiService.getCurrentFilm(currentFilm).then((res) => console.log("12"));
  };

  return (
    <FilmContext.Provider
      value={{
        loadNextFilms,
        films,
        //
        startPage,
        setStartPage,
        //
        currentFilm,
        setCurrentFilm,
        //
        loading,
        setLoading,
      }}
      {...props}
    />
  );
}
