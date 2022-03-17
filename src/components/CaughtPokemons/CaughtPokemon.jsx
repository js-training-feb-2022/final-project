import PropTypes from "prop-types";
import s from './CaughtPokemons.module.css';
import image from '../../img/pokeball-png-45332.png';

export const CaughtPokemon = ({id, name, time}) => {
    return (
        <div className={s.card}>
            <div className={s.card_title}>
                {name}
            </div>
            <img className={s.card_img} src={image}/>
            <div className={s.card_sub}>
                id: {id}
                <hr/>
                caught date and time: {time}
            </div>
        </div>
    );
}

CaughtPokemon.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}