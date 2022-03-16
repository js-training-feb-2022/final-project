import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <Box>
        <nav>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Pokedex
            </NavLink>
            <NavLink
              to="catched"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              My Pokemons
            </NavLink>
      </nav>
    </Box>
  );
};

export default HeaderMenu;
