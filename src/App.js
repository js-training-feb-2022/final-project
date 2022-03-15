import axios from 'axios';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Caught from './pages/Caught';
import PokeCard from './components/PokeCard';

function App() {
  const [listItems, setListItems] = React.useState([]);
  const [listCatched, setListCatched] = React.useState([]);
  const [pokeDetails, setPokeDetails] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState([]);  //  поменять нач знач на ...массив? изнач 15
  const [fetching, setFetching] = React.useState(true);  //  от момента когда мы отправили запрос и до когда вернулся ответ
  const [totalPages, setTotalPages] = React.useState(0);

  useEffect(() => {
    document.addEventListener('scroll', scrollPages)
    return function() {
      document.removeEventListener('scroll', scrollPages)
    }
  }, []);

  const scrollPages = (event) => {  // зададим условие для момента когда дошли до нижнего края стр
    if(event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 15 
    && listItems.length < totalPages) {
      setFetching(true);
    }
    // console.log('scrollHeight', event.target.documentElement.scrollHeight);  //  общ высота с уч скрола 
    // console.log('scrollTop', event.target.documentElement.scrollTop);  // место скрола от верха стр
    // console.log('Height', window.innerHeight);  //  высоту видимости стр. высота браузера
  }

  React.useEffect(() => {
    if(fetching) {
      console.log('fetching')
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${currentPage}`).then((res) => {
      // console.log(res.data.results);
      // setListItems(res.data.results);
      setListItems([...listItems, ...res.data.results]);
      setCurrentPage(prevState => prevState + 1);
      setTotalPages(1118);
    })
    .finally(() => setFetching(false));
    }    
  }, [fetching]);
  
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
