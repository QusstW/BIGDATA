import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { useFilm } from "../hooks";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { setStartPage } = useFilm();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" color="inherit">
            <NavLink
              onClick={() => {
                setStartPage(false);
              }}
              to="/table"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Films
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
