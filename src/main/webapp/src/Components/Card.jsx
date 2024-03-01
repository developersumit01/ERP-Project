import CardCSS from "../CSS/Card.module.css";
const Card = ({ icon, tittle }) => {
  return (
    <>
      <div className={CardCSS.card}>
        <div className={CardCSS.innerCard}>
          <img src={icon} alt="" />
          <span className={CardCSS.tittle}>{tittle}</span>
        </div>
      </div>
    </>
  );
};
export default Card;
