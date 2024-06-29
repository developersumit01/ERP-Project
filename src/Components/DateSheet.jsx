import WeekDays from "./WeekDays";
import WeekDaysCSS from "../CSS/DateSheet.module.css";
import Box from "./Box";
import lunchBreak from "../assets/Icons/lunchBreak.svg";
const data = [
  {
    "C Programming Language": "KCS101",
    "Date": "01/06/2024",
    "Day":"Monday",
    Time: "09:30 AM - 12:30 PM",
  },
  {
    Mathematics: "KCS102",
    "Date": "03/06/2024",
    "Day":"Wednesday",
    Time: "09:30 AM - 12:30 PM",
  },
  {
    "Physics": "KCS103",
    "Date": "05/06/2024",
    "Day":"Friday",
    Time: "09:30 AM - 12:30 PM",
  },
  {
    Mechanical: "KCS104",
    "Date": "08/06/2024",
    "Day":"Monday",
    Time: "09:30 AM - 12:30 PM",
  },
  {
    "Soft Skills": "KCS105",
    "Date": "10/06/2024",
    "Day":"Wednesday",
    Time: "09:30 AM - 12:30 PM",
  }
];
const DateSheet = () => {
  return (
    <>
      <div className={WeekDaysCSS.container}>
        <Box data={data} />
      </div>
    </>
  );
};

export default DateSheet;
