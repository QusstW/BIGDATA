import React from "react";
import { useFilm } from "../hooks";

const Test = () => {
  const { testR } = useFilm();
  return <div>{testR}</div>;
};

export default Test;
