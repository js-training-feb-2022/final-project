import {BrowserRouter, Routes, Route} from "react-router-dom";
import EachPokemonPage from "./Pages/EachPokemonPage";
import NavBar from "./components/NavBar";
import MainPage from "./Pages/MainPage";
import CatchedPage from "./Pages/CatchedPage";
import {GeneralPage} from "./Pages/GeneralPage";


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Routes >
              <Route path={"/"} element={<MainPage/>}/>
              <Route path={":itemId"} element={<EachPokemonPage/>}/>
              <Route path={'/cathedPage'} element={<CatchedPage/>}/>
              <Route path={'/main'} element={<GeneralPage/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
