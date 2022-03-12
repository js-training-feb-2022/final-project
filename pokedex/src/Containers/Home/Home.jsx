import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonContext } from '../../Utils/PokemonContext';
import PokemonDetails from '../../Components/PokemonDetails';
import PokemonList from '../PokemonList'
import './Home.css';

export default function Home() {
    const { caught } = useContext(PokemonContext);

    return (
            <div>
                <Routes>
                    <Route path="/" element={<PokemonList />} />
                    <Route path="/:id" element={<PokemonDetails caught={caught} />} />
                </Routes>
            </div>
    )
}
