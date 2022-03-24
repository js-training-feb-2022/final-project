import React, {useState} from 'react';
import MainPage from './main page/MainPage.js';
import axios from 'axios';
import PokesPage from './pokes page/PokesPage';
import MyPokes from './My pokes/MyPokes';
import {DataContext} from './data';
import {Route, Link, Routes} from 'react-router-dom';

export default function App(){
  const [countOfPokes, setCountOfPokes] = useState(0);
  const [allPokes, setAllPokes] = useState([]);
  const [listOfPokes, setListOfPokes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [caughtPokes, setCaughtPokes] = useState([]);
  const [cardsPerPage] = useState(10);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${cardsPerPage}`)

  React.useEffect(function(){
    axios.get(url).then(response=>{
      setCountOfPokes(response.data.count);
      let data = response.data.results.map((item, index)=> ({
        id:(index+(currentPage-1)*cardsPerPage), 
        name:item.name, 
        url:item.url, 
        key:(index+(currentPage-1)*cardsPerPage),
        caught:false, 
        caughtDate:null}));
      if (!allPokes.find(item=>item.id===data[0].id)){
        let count = allPokes.concat(data);
        setAllPokes(count);
        setListOfPokes(data);
      }
      else {
        let array = [];
        for (let i=data[0].id; i<(data[0].id+10); i++){
          array.push(allPokes.find(item=>item.id===i))
        }
        setListOfPokes(array);
      }
    })
  },[,currentPage]);

  const [pokesIdForAxios, setPokesIdForAxios] = React.useState(false);
  const [pokesData, setPokesData] = React.useState(null);
  const getPokesProperties = id => {setPokesIdForAxios(id-((currentPage-1)*cardsPerPage)+1)};
  
  React.useEffect(function(){
    if (pokesIdForAxios){
      if (pokesIdForAxios<1){
        return 0;
      }
      axios.get(listOfPokes[pokesIdForAxios-1].url).then(response=>{
        let dataAboutPoke = {};
        Object.assign(dataAboutPoke, listOfPokes[pokesIdForAxios-1]);
        dataAboutPoke.abilities = response.data.abilities.map(item=>item.ability.name); 
        dataAboutPoke.types = response.data.types.map(item=>item.type.name);
        dataAboutPoke.imgUrl = response.data.sprites.other["official-artwork"]["front_default"];
        dataAboutPoke.weight = response.data.weight;
        setPokesData(dataAboutPoke);
        })
    }
  },[pokesIdForAxios]);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${cardsPerPage*(pageNumber-1)}&limit=${cardsPerPage}`);
  };

  const addCaughtPoke = myNewPoke => {
    let array = caughtPokes.filter(item=>true);
    array.push(myNewPoke);
    setCaughtPokes(array);
  }

  const removeCaughtPoke = id => {
    let array = caughtPokes.filter(item=>(item.id!=id))
    setCaughtPokes(array);
  }

  const cleanPokesData = () => setPokesData(null);

  return (
      <>
          <header className='header'>
              <ul className='header__buttons-wrapper'>
                  <li className='header__button text'><Link to="/" onClick={cleanPokesData}>Главная</Link></li>
                  <li className='header__button text'><Link to="/my-pokes" onClick={cleanPokesData}>Мои покемоны</Link></li>
              </ul>
          </header>
          <div className='app'>
            <DataContext.Provider value={{listOfPokes, setListOfPokes, currentPage, cardsPerPage, addCaughtPoke, removeCaughtPoke, pokesData, getPokesProperties, currentPage, allPokes, setAllPokes}}>
                <Routes>
                    <Route path="/" element={<MainPage countOfPokes={countOfPokes} paginate={paginate}/>}/>
                    <Route path="/my-pokes" element={<MyPokes caughtPokes={caughtPokes}/>}/>
                    <Route path="/pers" element={<PokesPage/>}/>
                    <Route path="*" element={<MainPage/>}/>
                </Routes>
            </DataContext.Provider>
          </div>
      </>
  )
}