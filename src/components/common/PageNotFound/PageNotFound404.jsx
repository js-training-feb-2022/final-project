import error404 from '../../../img/404.JPG';
import s from './PageNotFound404.module.css';

export const PageNotFound = () => {
    return (
        <div className = {s.img_container}>
            <img src={error404} alt = 'error 404, page not found'/>
        </div>
    );
}