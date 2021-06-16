import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useFilm } from "../hooks";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: "5%",
  },
  text: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const About = () => {
  const classes = useStyles();

  const { setStartPage } = useFilm();

  return (
    <div className={classes.wrapper}>
      <div>Данная страница демонстрирует выполненное тестовое задание</div>
      <Button
        onClick={() => {
          setStartPage(false);
        }}
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        <NavLink className={classes.text} to="/table">
          Перейти к просмотру
        </NavLink>
      </Button>
    </div>
  );
};

export default About;
