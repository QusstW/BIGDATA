import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { useFilm } from "../hooks";
import { useEffect } from "react";

const CATEGORY = [
  {
    name: "Logo",
  },
  {
    name: "Movie title",
  },
  {
    name: "Year",
  },
  {
    name: "Rating",
  },
  {
    name: "More info",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MoviesTable() {
  const classes = useStyles();

  const { loadNextFilms, films } = useFilm();

  useEffect(() => {
    loadNextFilms(1);
  }, []);

  const renderCategory = () => {
    return CATEGORY.map((e, index) => (
      <TableCell key={e.name + index}>{e.name}</TableCell>
    ));
  };

  const renderBodyTable = () => {
    return films.map((f, index) => (
      <TableRow key={f + index}>
        <TableCell>
          <img
            style={{ maxWidth: "80px" }}
            src={f.medium_cover_image}
            alt="f"
          />
        </TableCell>
        <TableCell>{f.title_english}</TableCell>
        <TableCell>{f.year}</TableCell>
        <TableCell>{f.rating}</TableCell>
        <TableCell>
          <NavLink to="/film">More and commenting</NavLink>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div>
      <button
        onClick={() => {
          loadNextFilms();
        }}
      >
        asdasd
      </button>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>{renderCategory()}</TableRow>
          </TableHead>
          <TableBody>{renderBodyTable()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
