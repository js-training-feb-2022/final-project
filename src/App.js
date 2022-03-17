import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CardList from './Components/CardList';
import Footer from './Components/Footer';
import api from './Utils/Api';
import PokemonInfo from './Components/PokemonInfo';
import { Container } from 'react-bootstrap';
import Main from './Components/Main';

function App() {

  let navigate = useNavigate();
  const [initialCards, setInitialCards] = React.useState([]);
  const [pokemonCards, setPokemonCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [fetching, setFetching] = React.useState(true);
  const [nextPokemonKitUrl, setNextPokemonKitUrl] = React.useState('https://pokeapi.co/api/v2/pokemon?limit=24');
    
  
  React.useEffect(() => {
    if (fetching) {
      api.getPokemonCards(nextPokemonKitUrl)
        .then((res) => {
          setNextPokemonKitUrl(res.next);
          setInitialCards(res.results);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);


  React.useEffect(() => {
    let updatedPokemonList = [];
    initialCards.map((card) => {
      api.getPokemonInfo(card.url)
        .then((res) => {
          updatedPokemonList.push({name: res.name, id: res.id, picture: res.sprites.other['official-artwork'].front_default,
                                    abilities: res.abilities, types: res.types, weight: res.weight, 
                                    catchStatus: {status:false, date: ''}});
          updatedPokemonList.sort((a, b) => a.id - b.id);
          navigate('/');
          return updatedPokemonList;
        })
        .then((res) => {
          setPokemonCards([...pokemonCards, ...res]);
        })
        .catch((err) => {
          console.log(err);
        });
      return updatedPokemonList;
    })
  } ,[initialCards]);

  
  const handleCardClick = (card) => {
    setSelectedCard(card);
    navigate(`/pokemon/${card.id}`);
  }


  const handleCatchClick = (card) => {
    setSelectedCard(card);
    const currentDate = new Date().toLocaleDateString();
    card.catchStatus.status = true;
    card.catchStatus.date = currentDate;
  }


  const handleLoadMore = () => {
    if (nextPokemonKitUrl !== null) {
      setFetching(true);
    }
  }

    
  return (
    <>
      <Container fluid style={{backgroundColor: '#DCDCDC', maxWigth: '100%', padding: '0'}}>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Main cards={pokemonCards} onCardClick={handleCardClick} 
                                          onCatchClick={handleCatchClick} onLoadMore={handleLoadMore} />} />
          <Route path="/pokemons" element={<CardList cards={pokemonCards.filter((card) => card.catchStatus.status === true)} 
                                              onCardClick={handleCardClick} hideBtn={true} />}   />
          <Route path="/pokemon/:id" element={<PokemonInfo card={selectedCard}  />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
