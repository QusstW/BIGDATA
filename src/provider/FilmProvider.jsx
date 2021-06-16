import React, { createContext, useState } from "react";
import ApiService from "../apis/ApiService";
export const FilmContext = createContext();

export default function FilmProvider(props) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNextFilms = (pageNumber) => {
    ApiService.getFilms(pageNumber).then((res) => {
      setFilms((oldValue) => {
        addCommentField(res);
        console.log(films);
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
      value={{ loadNextFilms, loading, films }}
      {...props}
    />
  );
}
