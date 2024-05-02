import DashboardCSS from "../CSS/Dashboard.module.css";
import studentProfile from "../assets/images/studentProfile.png";
import UttilCSS from "../CSS/Uttil.module.css";
import attendanceIcon from "../assets/Icons/ic_attendance.svg";
import feesDueIcon from "../assets/Icons/ic_fees_due.svg";
import MainCard from "./MianCard.jsx";
import Card from "./Card.jsx";
// These are the icon which desplay in card.
import playQuizIcon from "../assets/Icons/ic_quiz.svg";
import assignmentIcon from "../assets/Icons/ic_assignment.svg";
import holidayIcon from "../assets/Icons/ic_holiday.svg";
import calenderIcon from "../assets/Icons/ic_calendra.svg";
import resultIcon from "../assets/Icons/ic_results.svg";
import dateSheetIcon from "../assets/Icons/ic_date_sheet.svg";
import doubtsIcon from "../assets/Icons/ic_doubts.svg";
import galleryIcon from "../assets/Icons/ic_gallery.svg";
import leaveIcon from "../assets/Icons/ic_leave.svg";
import passwordIcon from "../assets/Icons/ic_password.svg";
import eventIcon from "../assets/Icons/ic_event.svg";
import logoutIcon from "../assets/Icons/ic_logout.svg";
import studentIcon from "../assets/Icons/studentIcon.png";
import teacherIcon from "../assets/Icons/teacherIcon.png";
import examFormIcon from "../assets/images/examForm.png";
import newIcon from "../assets/Icons/newIcon.png";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.jsx";
import { PersonalInformationContext } from "../Context/PersonalInformationContext.jsx";
import { AcadmicInformationContext } from "../Context/AcadmicInformationContext.jsx";
import axios from "axios";
const studentCardItems = [
  {
    name: "Play Quiz",
    icon: playQuizIcon,
    URL:"play quizs",
  },
  {
    name: "Assignment",
    icon: assignmentIcon,
    URL:"assignment",
  },
  {
    name: "School Holidays",
    icon: holidayIcon,
    URL:"school holidays",
  },
  {
    name: "Time Table",
    icon: calenderIcon,
    URL:"time table",
  },
  {
    name: "Result",
    icon: resultIcon,
    URL:"result",
  },
  {
    name: "Date Sheet",
    icon: dateSheetIcon,
    URL:"date sheet",
  },
  {
    name: "Ask Doubts",
    icon: doubtsIcon,
    URL:"ask doubts",
  },
  {
    name: "School Gallery",
    icon: galleryIcon,
    URL:"school gallery",
  },
  {
    name: "Leave Application",
    icon: leaveIcon,
    URL:"applications",
  },
  {
    name: "Exam Form",
    icon: examFormIcon,
    URL:"exam from",
  },
  {
    name: "Change Password",
    icon: passwordIcon,
    URL:"change password",
  },
  {
    name: "Events",
    icon: eventIcon,
    URL:"college events",
  },
  {
    name: "Logout",
    icon: logoutIcon,
    URL:"logout",
  },
];

const adminCardItems = [
  {
    name: "New Student/Faculty",
    icon: newIcon,
    URL:"new",
  },
  {
    name: "School Holidays",
    icon: holidayIcon,
    URL:"",
  },
  {
    name: "Time Table",
    icon: calenderIcon,
    URL:"",
  },
  {
    name: "Result",
    icon: resultIcon,
    URL:"",
  },
  {
    name: "Date Sheet",
    icon: dateSheetIcon,
    URL:"",
  },
  {
    name: "School Gallery",
    icon: galleryIcon,
    URL:"",
  },
  {
    name: "Leave Application",
    icon: leaveIcon,
    URL:"",
  },
  {
    name: "Exam Form",
    icon: examFormIcon,
    URL:"",
  },
  {
    name: "Change Password",
    icon: passwordIcon,
    URL:"",
  },
  {
    name: "Events",
    icon: eventIcon,
    URL:"",
  },
  {
    name: "Logout",
    icon: logoutIcon,
    URL:"",
  },
];

const Dashboard = () => {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();
  if (!auth.login) {
    navigate("/");
  }
  const [personalInformation, setPersonalInformation] = useContext(
    PersonalInformationContext
  );
  const [acadmicInformation, setAcadmicInformation] = useContext(
    AcadmicInformationContext
  );
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    if (auth.role === "admin") {
      setCardItems(adminCardItems);
    } else {
      setCardItems(studentCardItems);
    }
  }, [auth]);

  console.log("auth in dashboard", auth);
  useEffect(() => {
    axios
      // .get(`https://school-erp-api.vercel.app/${auth.userId}/dashboard`, {
      .get(`http://localhost:3000/${auth.userId}/dashboard`, {
        params: auth,
      })
      .then((response) => {
        const { data } = response;
        setPersonalInformation(data.personalInformation);
        setAcadmicInformation(data.acadmicInformation);
      })
      .catch((error) => {
        console.log("The error is", error);
      });
  }, [auth]);

  return (
    <>
      {personalInformation?.Name?.value ? (
        <div className={DashboardCSS.mainDashboardContainer}>
          <div className={DashboardCSS.dashboardContainer}>
            <div className={DashboardCSS.dashboardHeader}>
              <div className={`${DashboardCSS.info}`}>
                <Link
                  to={`/${personalInformation.Name.value}/profile`}
                  className={`${UttilCSS.link} ${DashboardCSS.info}`}>
                  <span className={DashboardCSS.userName}>
                    {personalInformation.Name.value}
                  </span>
                  <span className={DashboardCSS.detail}>
                    {auth.role === "admin"
                      ? `Teach. Id. : ${personalInformation["Teach. Id."].value}`
                      : `Roll No. : ${personalInformation["Roll No."].value}`}
                  </span>
                  {auth.role === "admin" ? (
                    ""
                  ) : (
                    <>
                      <span
                        className={
                          DashboardCSS.detail
                        }>{`Course : ${personalInformation.Course.value}`}</span>
                      <span
                        className={
                          DashboardCSS.detail
                        }>{`Branch : ${personalInformation.Branch.value}`}</span>
                      <span
                        className={
                          DashboardCSS.detail
                        }>{`Section : ${personalInformation.Section.value}`}</span>
                    </>
                  )}
                </Link>
                <span className={DashboardCSS.session}>
                  {personalInformation.Session}
                </span>
              </div>
              <div className={DashboardCSS.photo}>
                <img src={studentProfile} alt="Profile Image" />
              </div>
            </div>
            <div className={DashboardCSS.backgroundCurve}>
              <div className={DashboardCSS.mainCardContainer}>
                <MainCard
                  icon={auth.role === "admin" ? studentIcon : attendanceIcon}
                  tittle={auth.role === "admin" ? "All Students" : "Attendance"}
                  content={auth.role === "admin" ? "" : `${80.39} %`}
                  URL={`${personalInformation.Name.value}/attendance`}
                />
                <MainCard
                  icon={auth.role === "admin" ? teacherIcon : feesDueIcon}
                  tittle={auth.role === "admin" ? "All Faculties" : "Fees Due"}
                  content={auth.role === "admin" ? "" : `₹${64000}`}
                  URL={`${personalInformation.Name.value}/fees`}
                />
              </div>
              <div className={DashboardCSS.cardContainer}>
                {cardItems.map((ele) => {
                  return (
                    <Card
                      icon={ele.icon}
                      tittle={ele.name}
                      URL={`/${personalInformation.Name.value}/${ele.URL}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Dashboard;
