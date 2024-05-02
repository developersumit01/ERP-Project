import { Link } from 'react-router-dom';
import MainCardCSS from '../CSS/MainCard.module.css';
import UttilCSS from '../CSS/Uttil.module.css';
const MainCard=({icon,content,tittle,URL})=>{
    return (
        <>
        <Link to={`/${URL}`} className={`${MainCardCSS.mainCard} ${UttilCSS.link}`}>
            <img src={icon} alt="" />
            <span className={MainCardCSS.contant}>{content}</span>
            <span className={MainCardCSS.tittle}>{tittle}</span>
        </Link>
        </>
    );
}
export default MainCard;