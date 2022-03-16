import { Container } from "@mui/material";
import HeaderMenu from "../../Components/HeaderMenu";
import { Route, Routes } from "react-router-dom";
import PokemonPageContainer from "../PokemonPageContainer";
import CatchedPageContainer from "../CatchedPageContainer";
import MainPageContainer from "../MainPageContainer";

const MainContainer = () => {


  return (
    <Container maxWidth={false}>
      <HeaderMenu />
      <Routes>
        <Route
          path="/"
          element={
            <MainPageContainer
            />
          }
        />
        <Route path="/catched" element={<CatchedPageContainer />} />
        <Route path="pokemon/:name" element={<PokemonPageContainer />} />
      </Routes>
    </Container>
  );
};

export default MainContainer;
