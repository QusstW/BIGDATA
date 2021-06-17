import React from "react";
import { useFilm } from "../hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button } from "@material-ui/core";

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
  const { currentFilm, addComment, deleteComment } = useFilm();

  const renderGenres = () => {
    return currentFilm.genres.map((g, i) => <div key={g + i}>{g}</div>);
  };

  const currentValueText = React.useRef();

  const renderComment = () => {
    console.log(currentFilm);
    return currentFilm.comments.map((e) => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>{e.value}</div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            deleteComment(e.value, currentFilm.id);
          }}
        >
          удалить
        </Button>
      </div>
    ));
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
        <Paper
          className={classes.paper}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <textarea
            placeholder="...Add Comment"
            style={{ width: "100%" }}
            ref={currentValueText}
          />
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginLeft: "5%" }}
            onClick={() => {
              addComment(currentValueText.current.value, currentFilm.id);
            }}
          >
            Send
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          {currentFilm.comments.length === 0 ? (
            <div>no message</div>
          ) : (
            renderComment()
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Film;
