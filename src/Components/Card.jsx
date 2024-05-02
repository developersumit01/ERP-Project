import { Link } from "react-router-dom";
import CardCSS from "../CSS/Card.module.css";
import UttilCSS from '../CSS/Uttil.module.css';
const Card = ({ icon, tittle,URL }) => {
  return (
    <>
      <Link to={URL} className={UttilCSS.link}>
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
