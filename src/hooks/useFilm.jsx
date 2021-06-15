import React from "react";

import { FilmContext } from "../provider/FilmProvider";

export default function useFilmHook() {
  return React.useContext(FilmContext);
}
