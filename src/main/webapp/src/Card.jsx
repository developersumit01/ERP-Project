import "./Card.css";
const Card = ({ icon, tittle = "Play Quiz" }) => {
  return (
    <>
      <div className="card">
        <div className="inner-card">
          <img src={icon} alt="" />
          <span className="tittle">{tittle}</span>
        </div>
      </div>
    </>
  );
};
export default Card;
