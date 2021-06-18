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

  const [isReady, setIsReady] = useState(false);

  //Функция загрузки новой порции фильмов
  const loadNextFilms = () => {
    ApiService.getFilms(pageNumber).then((res) => {
      setFilms((oldValue) => {
        addCommentField(res);
        setPageNumber(pageNumber + 1);
        setLoading(false);
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

  const addComment = (value, id) => {
    setFilms((oldValue) => {
      const extra = oldValue;
      extra.forEach((e) => {
        if (e.id === id) {
          e.comments.push({ value });
        }
      });
      return extra;
    });
    let obj = null;
    films.forEach((e) => {
      if (e.id === id) obj = e;
    });

    ApiService.postComment(obj).then((res) => {
      setCurrentFilm(() => {
        return {
          ...res,
          comments: [...res.comments],
        };
      });
    });
  };

  const deleteComment = (id, index) => {
    films.forEach((e) => {
      if (e.id === id) {
        e.comments.splice(index, 1);
      }
    });

    let extra = null;
    films.forEach((e) => {
      if (e.id === id) extra = e;
    });

    ApiService.deleteComment(extra).then((res) => {
      setCurrentFilm(() => {
        return {
          ...res,
          comments: [...res.comments],
        };
      });
    });
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
        //
        addComment,
        //
        deleteComment,
        //
        isReady,
        setIsReady,
      }}
      {...props}
    />
  );
}
