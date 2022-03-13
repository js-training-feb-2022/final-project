import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useRouteMatch,
  useParams
} from "react-router-dom";

 
export const HeaderContainer = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>  <Link to="/">All Pokemons</Link> </li>
          <li>  <Link to="/captured">Captured Pokemons</Link> </li>
        </ul>
      </nav>
    </header>    
 
  )
}
