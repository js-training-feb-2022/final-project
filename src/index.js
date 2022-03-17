import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './containers/AppLayout';
import Caught from './routes/Caught';
import Description from './routes/Description';
import PokemonList from './components/PokemonList';


ReactDOM.render(
  <Router>
    <AppLayout />
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/caught" element={<Caught />} />
      <Route exact path="/description/:id" element={<Description />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem", color: 'darkblue', fontWeight: 800, fontSize: 26 }}>
            <p>There's nothing here!</p>
          </main>
        }
        />
    </Routes>
  </Router>,
  document.getElementById('root')
);
