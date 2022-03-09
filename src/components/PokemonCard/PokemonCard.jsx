import React from 'react';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../../UI/CustomButton/CustomButton';
import './cardStyle.scss';

const CARD_STYLE = {
  Release: 'card_active',
  Catch: 'card_default',
};

export function PokemonCard({ name, id, imagePath, onClick, link, state }) {
  return (
    <div className={`card ` + CARD_STYLE[state]}>
      <NavLink to={link}>
        <div className='card__container'>
          <img
            width={200}
            height={200}
            className='image'
            src={imagePath}
            alt={name}
          />
          <div className='id-font'>{id}</div>
          <h4>{name}</h4>
        </div>
      </NavLink>
      <div className='button-wrapper'>
        <CustomButton title={state} type={state} onClick={onClick} />
      </div>
    </div>
  );
}
