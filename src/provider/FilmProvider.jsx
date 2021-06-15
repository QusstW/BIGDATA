import React, { createContext } from "react";

export const FilmContext = createContext();

export default function FilmProvider(props) {
  const testR = 123123;
  return <FilmContext.Provider value={{ testR }} {...props} />;
}
