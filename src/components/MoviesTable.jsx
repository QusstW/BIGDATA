import React from "react";
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
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
      </TableRow>
    ));
  };

  return (
    <div>
      <button
        onClick={() => {
          loadNextFilms(12);
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
