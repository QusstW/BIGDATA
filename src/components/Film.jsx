import React from "react";
import { useFilm } from "../hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  descriptionContent: {
    display: "flex",
    flexDirection: "row",
    marginTop: "3%",
    textAlign: "start",
  },
}));

const Film = () => {
  const classes = useStyles();
  const { currentFilm } = useFilm();

  const renderGenres = () => {
    return currentFilm.genres.map((g, i) => <div key={g + i}>{g}</div>);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <div>{currentFilm.title_english}</div>
          <img
            style={{ maxWidth: "500px", marginTop: "5%" }}
            src={currentFilm.medium_cover_image}
            alt="full-img"
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <div>
            <div className={classes.descriptionContent}>
              Рейтинг: {currentFilm.rating}
            </div>
            <div className={classes.descriptionContent}>
              Длительность: {currentFilm.runtime} min
            </div>
            <div className={classes.descriptionContent}>
              Жанры: {renderGenres()}
            </div>
            <div className={classes.descriptionContent}>
              Полное описание: {currentFilm.description_full}{" "}
            </div>
            <div className={classes.descriptionContent}>
              Год выпуска: {currentFilm.year}
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.paper}>Комментарии тута будут</Paper>
      </Grid>
    </Grid>
  );
};

export default Film;
