import { Link } from "react-router-dom";
import CardCSS from "../CSS/Card.module.css";
const Card = ({ icon, tittle }) => {
  return (
    <>
      <Link to={tittle.toLowerCase()} className={CardCSS.link}>
      <div className={CardCSS.card}>
        <div className={CardCSS.innerCard}>
          <img src={icon} alt="" />
          <span className={CardCSS.tittle}>{tittle}</span>
        </div>
      </div>
      </Link>
    </>
  );
};
export default Card;
