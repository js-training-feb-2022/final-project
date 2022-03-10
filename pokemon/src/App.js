// import AllPokemons from "./components/AllPokemons";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EachPokemon from "./components/EachPokemon";
import EachTest from "./components/eachTest";
import NavBar from "./components/NavBar";
import Test from "./components/test";
import CatchedPage from "./components/CatchedPage";


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Routes >
              {/*<Route path={"/"} element={<AllPokemons/>}/>*/}
              <Route path={"/"} element={<Test/>}/>
              <Route path={":itemId"} element={<EachTest/>}/>
              <Route path={'/cathedPage'} element={<CatchedPage/>}/>

              {/*<Route path={":itemId"} element={<EachPokemon/>}/>*/}
          </Routes>
      </BrowserRouter>

  );
}

export default App;
