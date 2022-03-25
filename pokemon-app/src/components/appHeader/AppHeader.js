import './appHeader.scss';
import {Link} from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to='/'>
                    Pokemon information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><Link to='/'>Main</Link></li>
                    /
                    <li><Link to='/mypokemons'>My pokemons</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;