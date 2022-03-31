import axios from 'axios';
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Caught from './pages/Caught';
import PokePage from './pages/PokePage';
import DataContext from './provider';

function App() {
  const [listItems, setListItems] = React.useState([]);  
  const [listCatched, setListCatched] = React.useState([]);
  const [pokeDetails, setPokeDetails] = React.useState({});
  const [abilityList, setAbilityList] = React.useState([]);
  const [typesList, setTypesList] = React.useState([]);
  const [imgList, setImgList] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState([]);  
  const [fetching, setFetching] = React.useState(true);  
  const [totalPoki, setTotalPoki] = React.useState(20); 

  const [pokeId, setPokeId] = React.useState(0);
  const value = { pokeId, setPokeId };

  const scrollPages = (e) => {  
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 20 ) {
      setFetching(true);
    }
  }
  
  React.useEffect(() => {  
    document.addEventListener('scroll', scrollPages)
    return function() {
      document.removeEventListener('scroll', scrollPages)
    }
  }, []); 

  React.useEffect(() => {  
    if(fetching) {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${currentPage}`)  
        .then(response => {
          setListItems([...listItems, ...response.data.results]);
          setCurrentPage(prevState => prevState + 20);
          setTotalPoki(response.data.count);
        })
        .finally(() => setFetching(false));
  }
  }, [fetching]);    

  React.useEffect(() => {
    if(pokeId) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then((res) => {
        if(res.data) {
          setPokeDetails(res.data);
          setAbilityList(res.data.abilities);
          setTypesList(res.data.types);
          setImgList(res.data.sprites.other['official-artwork'].front_default);
        }   
      })    
    };
  }, [pokeId]);
   
  const onAddToCatched = (obj) => {
    if(listCatched.find((item) => item.id === obj.id)) {
      setListCatched((prev) => prev.filter(item => item.id !== obj.id));
    } else {
      setListCatched((prev) => [...prev, obj]);
    }
  };

  const isItemAdded = (id) => {
    return listCatched.some((obj) => obj.id === id);
  };

  return (
    <div className="wrapper">
      <Header />      
      <div className='top'>
        <a href="#top-id" className="top_btn">up</a>
      </div>      
      <DataContext.Provider value={value}>
        <Routes>
          <Route path='/' element={
            <Home listItems={listItems} onAddToCatched={onAddToCatched} isItemAdded={isItemAdded} />} >
          </Route>
          <Route path='/caught' element={
            <Caught items={listCatched} />} >
          </Route>
          <Route path='/pokecard' element={
            <PokePage listDetails={pokeDetails} abilityList={abilityList} typesList={typesList} imgList={imgList}/>} >            
          </Route>
        </Routes>     
      </DataContext.Provider>      
    </div>
  );
}

export default App;
