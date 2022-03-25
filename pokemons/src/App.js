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
import Header from './components/header/Header';
import ErrorBoundary from './components/error/ErrorBoundary';
import { DefaultTheme } from './themes/DefaultTheme';
import { ThemeProvider } from '@mui/material/styles';

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ErrorBoundary>
                  <Main/>
                </ErrorBoundary>
              }
            />
            <Route
              path="/MyPokemons"
              element={
                <ErrorBoundary>
                  <MyPokemons/>
                </ErrorBoundary>
              }
            />   
            <Route
              path="/pokemon/:name"
              element={
                <ErrorBoundary>
                  <Pokemon/>
                </ErrorBoundary>
              }
            />          
          </Routes>
        </div>
      </Router>    
    </ThemeProvider>
  );
}


