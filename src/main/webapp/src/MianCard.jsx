import './MainCard.css';
const MainCard=({icon,content,tittle})=>{
    return (
        <>
        <div className="main-card">
            <img src={icon} alt="" />
            <span className="contant">{content}</span>
            <span className="tittle">{tittle}</span>
        </div>
        </>
    );
}
export default MainCard;