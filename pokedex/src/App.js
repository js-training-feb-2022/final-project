import axios from 'axios';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Caught from './pages/Caught';
import PokeCard from './components/PokeCard';

function App() {
  const [listItems, setListItems] = React.useState([]);
  const [listCatched, setListCatched] = React.useState([]);
  const [pokeDetails, setPokeDetails] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=12').then((res) => {
      // console.log(res.data.results);
      setListItems(res.data.results);
    });
  }, []);
  
  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
      console.log(res.data);
      setPokeDetails(res.data);
    });
  }, []);
  
  const onAddToCatched = (obj) => {
    if(listCatched.find((item) => item.id === obj.id)) {
      setListCatched((prev) => prev.filter(item => item.id != obj.id));
    } else {
      setListCatched((prev) => [...prev, obj]);
    }
    // setListCatched(prev => [...prev, obj]);    
  };

  const isItemAdded = (id) => {
    return listCatched.some((obj) => obj.id === id);
  };
  
  return (
    <div className="wrapper">
      <Header />      

      <Routes>
        <Route path='/' element={<Home listItems={listItems} onAddToCatched={onAddToCatched} isItemAdded={isItemAdded}/>} >
        </Route>
        <Route path='/caught' element={<Caught items={listCatched} />} >
        </Route>
        <Route path='/pokecard' element={<PokeCard listDetails={pokeDetails} />} >
        </Route>
      </Routes>      

    </div>
  );
}

export default App;
