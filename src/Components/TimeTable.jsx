import WeekDays from "./WeekDays";
import WeekDaysCSS from "../CSS/TimeTable.module.css";
import Box from "./Box";
import lunchBreak from "../assets/Icons/lunchBreak.svg";
const data = [
  {
    "Computer Science": "",
    Time: "8:15am - 9:00am",
    "Sandhya Mam": "Period 1",
  },
  {
    Mathematics: "",
    Time: "9:00am - 9:45am",
    "Kushum Mam": "Period 2",
  },
  {
    "Computer Science": "",
    Time: "8:15am - 9:00am",
    "Sandhya Mam": "Period 1",
  },
  {
    Lunch: lunchBreak,
    Time: "8:15am - 9:00am",
  },
  {
    Mathematics: "",
    Time: "9:00am - 9:45am",
    "Kushum Mam": "Period 2",
  },
  {
    "Computer Science": "",
    Time: "8:15am - 9:00am",
    "Sandhya Mam": "Period 1",
  },
  {
    Mathematics: "",
    Time: "9:00am - 9:45am",
    "Kushum Mam": "Period 2",
  },
];
const TimeTable = () => {
  return (
    <>
      <div className={WeekDaysCSS.container}>
        <WeekDays />
        <Box data={data} />
      </div>
    </>
  );
};

export default TimeTable;
