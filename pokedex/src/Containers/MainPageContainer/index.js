import MainPage from "../../Components/MainPage";
import {DEFAULT_QUERY_PARAMS} from "../../utils/constants";
import {useEffect, useState} from "react";
import {useQueryParams} from "../../utils/useQueryParams";


const MainPageContainer = () => {
    const [allPokemons, setAllPokemons] = useState({});
    const { queryParams } = useQueryParams();
    useEffect(() => {
        fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${queryParams.limit}&offset=${queryParams.offset}`
        )
            .then((response) => response.json())
            .then((pokemons) => setAllPokemons(pokemons));
    }, [queryParams.offset, queryParams.limit]);
    return(
        <MainPage
            pokemons={allPokemons.results}
            pagesCount={Math.ceil(
                (allPokemons.count || 0) / DEFAULT_QUERY_PARAMS.limit
            )}
        />
    )
}

export default MainPageContainer