import "./Dashboard.css";
import profileImage from "./assets/images/profile.jpg";
import attendanceIcon from "./assets/Icons/ic_attendance.svg";
import feesDueIcon from "./assets/Icons/ic_fees_due.svg";
import MainCard from "./MianCard.jsx";
import Card from "./Card.jsx";
// These are the icon which desplay in card.
import playQuizIcon from "./assets/Icons/ic_quiz.svg";
import assignmentIcon from "./assets/Icons/ic_assignment.svg";
import holidayIcon from "./assets/Icons/ic_holiday.svg";
import calenderIcon from "./assets/Icons/ic_calendra.svg";
import resultIcon from "./assets/Icons/ic_results.svg";
import dateSheetIcon from "./assets/Icons/ic_date_sheet.svg";
import doubtsIcon from "./assets/Icons/ic_doubts.svg";
import galleryIcon from "./assets/Icons/ic_gallery.svg";
import leaveIcon from "./assets/Icons/ic_leave.svg";
import passwordIcon from "./assets/Icons/ic_password.svg";
import eventIcon from "./assets/Icons/ic_event.svg";
import logoutIcon from "./assets/Icons/ic_logout.svg";
import { useState } from "react";
const cardItem = [
  {
    name: "Play Quiz",
    icon: playQuizIcon,
  },
  {
    name: "Assignment",
    icon: assignmentIcon,
  },
  {
    name: "School Holidays",
    icon: holidayIcon,
  },
  {
    name: "Time Table",
    icon: calenderIcon,
  },
  {
    name: "Result",
    icon: resultIcon,
  },
  {
    name: "Date Sheet",
    icon: dateSheetIcon,
  },
  {
    name: "Ask Doubts",
    icon: doubtsIcon,
  },
  {
    name: "School Gallery",
    icon: galleryIcon,
  },
  {
    name: "Leave Application",
    icon: leaveIcon,
  },
  {
    name: "Change Password",
    icon: passwordIcon,
  },
  {
    name: "Events",
    icon: eventIcon,
  },
  {
    name: "Logout",
    icon: logoutIcon,
  },
];
const Dashboard = () => {
  const [name, setName] = useState("SUMIT KUMAR");
  const [course, setCourse] = useState("B. Tech. IT");
  const [section, setSection] = useState("3C");
  const [rollNo, setRollNo] = useState("2101280130003");
  const [session, setSession] = useState("2023-24");
  return (
    <>
      <div className="main-dashboard-container">
        <div className="dashboard-container">
          <div className="header">
            <div className="info">
              <span className="user-name">{name}</span>
              <span className="detail">{`Course : ${course}`}</span>
              <span className="detail">{`Section : ${section}`}</span>
              <span className="detail">{`Roll No. : ${rollNo}`}</span>
              <span className="session">{session}</span>
            </div>
            <div className="photo">
              <img src={''} alt="Profile Image" />
            </div>
          </div>
          <div className="background-curve">
            <div className="main-card-container">
              <MainCard
                icon={attendanceIcon}
                tittle={"Attendance"}
                content={`${80.39} %`}
              />
              <MainCard
                icon={feesDueIcon}
                tittle={"Fees Due"}
                content={`₹${64000}`}
              />
            </div>
            <div className="card-container">
              {cardItem.map((ele) => {
                return <Card icon={ele.icon} tittle={ele.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
