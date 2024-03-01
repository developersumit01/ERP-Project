import { useState } from "react";
import "./Calender.css";
const Calender = () => {
  const year = ["2023", "2024"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const temp = [...Array(42).keys()];
  let date = 1;
  const todayDate = new Date().getDate();
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(
    months[new Date(`February 21, ${currentYear}`).getMonth()]
  );
  const dayOfFirstDay = new Date(`${currentMonth} 1, ${currentYear}`).getDay();
  const numberOfDays = new Date(
    +currentYear,
    months.indexOf(currentMonth) + 1,
    0
  ).getDate();
  const handleChange = (e) => {
    if (e.target.name === "month") {
      setCurrentMonth(e.target.value);
    } else if (e.target.name === "year") {
      setCurrentYear(e.target.value);
    }
  };
  const makeOptions = (array) => {
    return (
      <>
        {array.map((ele) => {
          return <option value={ele}>{ele}</option>;
        })}
      </>
    );
  };
  return (
    <div className="calender-container">
      <div className="header">
        <select
          name="month"
          value={currentMonth}
          onChange={handleChange}
          className="select-option">
          {makeOptions(months)}
        </select>
        <select
          name="year"
          value={currentYear}
          onChange={handleChange}
          className="select-option">
          {makeOptions(year)}
        </select>
      </div>
      <div className="weak-days">
        {days.map((ele) => {
          return <div className="day">{ele}</div>;
        })}
      </div>
      <div className="dates">
        {temp.map((ele, index) => {
          return (
            <>
              {date <= numberOfDays ? (
                <div
                  tabIndex={ele}
                  className={`date ${
                    ele >= dayOfFirstDay && date <= numberOfDays
                      ? `date-number ${
                          ele % 7 == 0 || ele % 7 == 6 ? "color-red" : ""
                        } ${
                          date == todayDate &&
                          todayMonth == months.indexOf(currentMonth) + 1 &&
                          todayYear == currentYear
                            ? "today-date"
                            : ""
                        }`
                      : ""
                  }`}>
                  {ele >= dayOfFirstDay && date <= numberOfDays ? date++ : ""}
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Calender;
