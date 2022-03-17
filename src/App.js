import React from 'react';
import MainPage from './main page/MainPage.js';
import axios from 'axios';
import PokesPage from './pokes page/PokesPage';
import MyPokes from './My pokes/MyPokes';
import {DataContext} from './data';
import {Route, Link, Routes} from 'react-router-dom';

export default function App(){
    const homeUrl = "https://pokeapi.co/api/v2/pokemon";

    const [listOfPokes, setListOfPokes] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [cardsPerPage] = React.useState(10);

    React.useEffect(function(){
      axios.get(homeUrl).then(response=>{
        let data = response.data.results.map((item, index)=> ({id:index, name:item.name, url:item.url, key:index, caught:false, caughtDate:null}))
        data.forEach(item=>{
          axios.get(item.url).then(
            (response)=>{
              item.abilities = response.data.abilities.map(item=>item.ability.name); 
              item.types = response.data.types.map(item=>item.type.name);
              item.imgUrl = response.data.sprites.other["official-artwork"]["front_default"];
              item.weight = response.data.weight;
              }
          )}
        )
        setListOfPokes(data);
      })
    },[]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = listOfPokes.slice(indexOfFirstCard, indexOfLastCard)
    const paginate = pageNumber => {setCurrentPage(pageNumber)};
    debugger
    return (
        <>
            <header className='header'>
                <ul className='header__buttons-wrapper'>
                    <li className='header__button text'><Link to="/">Главная</Link></li>
                    <li className='header__button text'><Link to="/my-pokes">Мои покемоны</Link></li>
                </ul>
            </header>
            <div className='app'>
              <DataContext.Provider value={{listOfPokes, setListOfPokes}}>
                  <Routes>
                      <Route path="/" element={<MainPage data={currentCards} paginate={paginate}/>}/>
                      <Route path="/my-pokes" element={<MyPokes/>}/>
                      <Route path="/pers" element={<PokesPage/>}/>
                      <Route path="*" element={<MainPage/>}/>
                  </Routes>
              </DataContext.Provider>
            </div>
        </>
    )
}