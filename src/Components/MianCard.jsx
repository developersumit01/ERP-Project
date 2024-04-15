import MainCardCSS from '../CSS/MainCard.module.css';
const MainCard=({icon,content,tittle})=>{
    return (
        <>
        <div className={MainCardCSS.mainCard}>
            <img src={icon} alt="" />
            <span className={MainCardCSS.contant}>{content}</span>
            <span className={MainCardCSS.tittle}>{tittle}</span>
        </div>
        </>
    );
}
export default MainCard;