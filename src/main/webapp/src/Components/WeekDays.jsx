import { useState } from "react";
import CalenderCSS from "../CSS/Calender.module.css";

const WeekDays = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const handleClick = (e) => {
    console.log(e);
    setMarker(e.target.id);
  };
  const [marker, setMarker] = useState(new Date().getDay());
  return (
    <div className={CalenderCSS.weakDays}>
      {days.map((ele, index) => {
        return (
          <div className={CalenderCSS.day}>
            <input
              type="radio"
              id={index}
              name="day"
              onClick={handleClick}
              checked={index == marker}
            />
            <label htmlFor={index}>{ele}</label>
          </div>
        );
      })}
    </div>
  );
};

export default WeekDays;
