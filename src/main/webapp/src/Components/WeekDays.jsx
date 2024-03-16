import CalenderCSS from '../CSS/Calender.module.css';

const WeekDays = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
      <div className={CalenderCSS.weakDays}>
      {days.map((ele) => {
        return <div className={CalenderCSS.day}>{ele}</div>;
      })}
    </div>
  )
}

export default WeekDays