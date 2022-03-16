import axios from 'axios';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Caught from './pages/Caught';
import PokeCard from './components/PokeCard';
import DataContext from './provider';

function App() {
  const [listItems, setListItems] = React.useState([]);  // загржаемые данные на гл стр
  const [listCatched, setListCatched] = React.useState([]);
  const [pokeDetails, setPokeDetails] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);  //  поменять нач знач на ...массив? изнач 15
  const [fetching, setFetching] = React.useState(true);  //  от момента когда мы отправили запрос и до когда вернулся ответ
  const [totalPoki, setTotalPoki] = React.useState(0);  //  следит за окончанием массива данных на сервере
  
  const [pokeId, setPokeId] = React.useState(0);
  const value = { pokeId, setPokeId };
  
  console.log(pokeId);
  
  React.useEffect(() => {  //  первый параметр функция callback, второй массив зависимостей
    document.addEventListener('scroll', scrollPages)
    return function() {
      document.removeEventListener('scroll', scrollPages)
    }
  }, []);  //  если массив пустой то функция отработает один раз  

  React.useEffect(() => {  
    if(fetching) {
      // console.log('fetching')
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1125&page=${currentPage}`)  
        .then(response => {
          // setListItems(response.data.results)  
          // console.log(response.data.results);    
          setListItems([...listItems, ...response.data.results]);
          setCurrentPage(prevState => prevState + 100);
          setTotalPoki(response.data.results.lenght);

          // console.log(response.data.results[0].name);
    })
    .finally(() => setFetching(false));
  }
  }, [fetching]);    //  
  
  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/2').then((res) => {
      // console.log(res.data.id);
      setPokeDetails(res.data);
    });
  }, []);

  const scrollPages = (e) => {  // срабатывает при скроле стр / условие для момента когда дошли до нижнего края стр
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 20 ) {
    // && listItems.length < totalPoki) {  //  НЕ ПОЛУЧИЛОСЬ НАСТРОИТЬ ОТМЕНУ ЗАПРОСОВ ПРИ ОКОНЧАНИИ МАССИВА
      setFetching(true);
    }
    // console.log('scrollHeight', e.target.documentElement.scrollHeight);  //  общ высота с уч скрола 
    // console.log('scrollTop', e.target.documentElement.scrollTop);  // место скрола от верха стр
    // console.log('Height', window.innerHeight);  //  высоту видимости стр. высота браузера
  }
  
  const onAddToCatched = (obj) => {
    if(listCatched.find((item) => item.id === obj.id)) {
      setListCatched((prev) => prev.filter(item => item.id !== obj.id));
    } else {
      setListCatched((prev) => [...prev, obj]);
    }
    // setListCatched(prev => [...prev, obj]);    
  };

  const isItemAdded = (id) => {
    return listCatched.some((obj) => obj.id === id);
  };
  
  const showItemDetails = (id) => {
    return pokeId.some((obj) => obj.id === id);
  };

  return (
    <div className="wrapper">
      <Header />      

      <DataContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<Home listItems={listItems} onAddToCatched={onAddToCatched} isItemAdded={isItemAdded}/>} >
          </Route>
          <Route path='/caught' element={<Caught items={listCatched} />} >
          </Route>
          <Route path='/pokecard' element={<PokeCard listDetails={pokeDetails} showItemDetails={showItemDetails}/>} >
          </Route>
        </Routes>     
      </DataContext.Provider>
      
    </div>
  );
}

export default App;
