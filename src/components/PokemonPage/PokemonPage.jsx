import PropTypes from "prop-types";
import s from './PokemonPage.module.css';

export const PokemonPage = ({id = null, name = "", img = "", weight = "", abilities = [], types = [], isCatched = false, caughtTime = ""}) => {
    
    const abils = abilities.map((element, i) => <li key={i}>{element.ability.name}</li>);
    const tps = types.map((element, i) => <li key={i}>{element.type.name}</li>);
    
    return (
        <div className={s.card}>
            <div className={s.card_title}>
                {name.toUpperCase()} <br/>
            </div>
            <div>
                <img className={s.card_img} src={img} alt={name}/>
            </div>
            <div className={s.card_sub}>
                id: {id} <br/>
                weight: {weight}
            <hr/>
            <u>Abilities:</u> <ul>{abils}</ul>
            <u>Types:</u> <ul>{tps}</ul>
            <hr/>
            Status: {isCatched ? `caught` : `not caught`}<br/>
            Capture date and time: {caughtTime}
            </div>

        </div>
    );
}

PokemonPage.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    abilities: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
    isCatched: PropTypes.bool.isRequired,
    caughtTime: PropTypes.string.isRequired
}