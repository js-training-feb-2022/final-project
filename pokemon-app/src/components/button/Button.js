import {useEffect, useState} from 'react'

import './button.scss'
const Button = ({style, addPokemon, catching}) => {
    const [content, setContent] = useState('Catch')
    const [catched, setCatched] = useState(catching);
    
    useEffect(() => {
        if (!catched) {
            return
        };
        setContent(content => content = 'Catched')
    }, [catched])
    const styleVal = catched ? '__disabled': '';
    style = styleVal;
    function listener() {
        if(catched) {return}
        setCatched(catched => catched = true);
        addPokemon();
    }
    return(
        <div className='catchButton' onClick={listener}>
        <div className={`pokeball${style}`}>
        <div className='pokeball__button'></div>
        </div> 
        <div className='textBtn'>{content}</div>
        </div>
    )
}

export default Button;