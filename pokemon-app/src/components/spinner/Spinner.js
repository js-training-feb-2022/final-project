import spinner from './spinner.gif'
import './spinner.scss'

const Spinner = ({size}) => {
    return (
        <img src={spinner} className={`spinner__${size}`}/>
    )
}

export default Spinner;