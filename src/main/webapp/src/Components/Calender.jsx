import { useState } from "react";
import CalenderCSS from "../CSS/Calender.module.css";
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
    months[new Date().getMonth()]
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
  console.log(todayDate);
  return (
    <div className={CalenderCSS.calenderContainer}>
      <div className={CalenderCSS.header}>
        <select
          name="month"
          value={currentMonth}
          onChange={handleChange}
          className={CalenderCSS.selectOption}>
          {makeOptions(months)}
        </select>
        <select
          name="year"
          value={currentYear}
          onChange={handleChange}
          className={CalenderCSS.selectOption}>
          {makeOptions(year)}
        </select>
      </div>
      <div className={CalenderCSS.weakDays}>
        {days.map((ele) => {
          return <div className={CalenderCSS.day}>{ele}</div>;
        })}
      </div>
      <div className={CalenderCSS.dates}>
        {temp.map((ele, index) => {
          return (
            <>
              {date <= numberOfDays ? (
                <div
                  tabIndex={ele}
                  className={`${
                    ele >= dayOfFirstDay && date <= numberOfDays
                      ? `${CalenderCSS.dateNumber} ${
                          ele % 7 == 0 || ele % 7 == 6
                            ? CalenderCSS.colorRed
                            : ""
                        } ${
                          date == todayDate &&
                          todayMonth == months.indexOf(currentMonth) &&
                          todayYear == currentYear
                            ? CalenderCSS.todayDate
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
