import {BrowserRouter, Routes, Route} from "react-router-dom";
import EachTest from "./components/eachTest";
import NavBar from "./components/NavBar";
import Test from "./Pages/test";
import CatchedPage from "./components/CatchedPage";
import {MainPage} from "./Pages/Main";


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Routes >
              <Route path={"/"} element={<Test/>}/>
              <Route path={":itemId"} element={<EachTest/>}/>
              <Route path={'/cathedPage'} element={<CatchedPage/>}/>
              <Route path={'/main'} element={<MainPage/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
