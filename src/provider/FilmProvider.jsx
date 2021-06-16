import React, { createContext, useState } from "react";
import ApiService from "../apis/ApiService";
export const FilmContext = createContext();

export default function FilmProvider(props) {
  //массив фильмов
  const [films, setFilms] = useState([]);

  //состояние стартовой страницы
  const [startPage, setStartPage] = useState(true);

  const [pageNumber, setPageNumber] = useState(1);

  //Функция загрузки новой порции фильмов
  const loadNextFilms = () => {
    ApiService.getFilms(pageNumber).then((res) => {
      setFilms((oldValue) => {
        addCommentField(res);
        setPageNumber(pageNumber + 1);
        console.log(pageNumber);
        return [...oldValue, ...res];
      });
    });
  };

  // Функция добавляет поле comments к каждому объекту текущей порции
  const addCommentField = (films) => {
    return films.forEach((f) => {
      f.comments = [];
    });
  };

  return (
    <FilmContext.Provider
      value={{ loadNextFilms, films, startPage, setStartPage }}
      {...props}
    />
  );
}
