import React from 'react';
import { PokeContext } from '../App';
import Header from '../Components/Header/Header';

function HeaderContainer() {
  const { catched } = React.useContext(PokeContext);
  const count = catched.length;
  return <Header count={count}/>;
}

export default HeaderContainer;
