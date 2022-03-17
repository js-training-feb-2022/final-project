import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../../utils/Pokemon.ttf";

const useStyles = makeStyles(() => ({
  link: {
    paddingBottom: "5px",
    "-webkit-text-stroke": "1px #004eff",
    fontFamily: "Pokemon",
    color: "yellow",
    marginLeft: "4vh",
    fontSize: "3vh",
  },
  header: {
    marginBottom: "20px",
    backgroundColor: "unset",
    boxShadow: "unset",
  },
  toolbar: {
    marginLeft: "5vh",
  },
  selected: {
    paddingBottom: "4px",
    borderBottom: "1px solid black",
  },
}));

const HeaderMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            classes.link + " " + (isActive ? classes.selected : "")
          }
        >
          Pokedex
        </NavLink>
        <NavLink
          to="catched"
          className={({ isActive }) =>
            classes.link + " " + (isActive ? classes.selected : "")
          }
        >
          My Pokemons
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMenu;
