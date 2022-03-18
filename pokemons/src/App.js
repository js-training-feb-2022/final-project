import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './pages/main/Main';
import MyPokemons from './pages/my-pokemons/MyPokemons';
import Pokemon from './pages/pokemons/Pokemon';
import Header from './components/header/Header'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/MyPokemons" element={<MyPokemons/>} />   
          <Route path="/pokemon/:name" element={<Pokemon/>} />          
        </Routes>
      </div>
    </Router>
  );
}


