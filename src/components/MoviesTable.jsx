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
  Button,
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

  const { loadNextFilms, films, setCurrentFilm } = useFilm();

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
            style={{ maxWidth: "80px", borderRadius: "5px" }}
            src={f.medium_cover_image}
            alt="f"
          />
        </TableCell>
        <TableCell>{f.title_english}</TableCell>
        <TableCell>{f.year}</TableCell>
        <TableCell>{f.rating}</TableCell>
        <TableCell>
          <Button
            color="primary"
            onClick={() => {
              console.log(f);
              setCurrentFilm(f);
            }}
          >
            <NavLink
              style={{ textDecoration: "none", color: "#000" }}
              to="/film"
            >
              More and commenting
            </NavLink>
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <>
      <Paper elevation={3}>
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
      </Paper>
      <div
        style={{ marginTop: "2%", display: "flex", justifyContent: "center" }}
      >
        <Button onClick={loadNextFilms} variant="outlined" color="secondary">
          Load more
        </Button>
      </div>
    </>
  );
}
