import BackgroundCSS from "../CSS/Background.module.css";
import bottumImage from "../assets/images/bottumImage.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useFormValidate from "../hooks/useFormValidate";
import { error } from "../Context/MyProfileErrors";
import { PersonalInformationContext } from "../Context/PersonalInformationContext";
import { AcadmicInformationContext } from "../Context/AcadmicInformationContext";
import { AuthContext } from "../Context/AuthContext";
import { EditUserContext } from "../Context/EditUserContextProvider";
import axios from "axios";

const Background = () => {
  const [personalDataError, setPersonalDataError] = useState({});
  const [acadmicDataError, setAcadmicDataError] = useState({});
  const [everyThingOk, setEveryThingOk] = useState(false);
  const [personalData, setPersonalData] = useContext(
    PersonalInformationContext
  );
  const [acadmicData, setAcadmicData] = useContext(AcadmicInformationContext);
  const [editUser, setEditUser] = useContext(EditUserContext);
  const [edit, setEdit] = useState(false);
  const Validation = () => {};
  const handleSubmit = () => {
    setPersonalDataError(useFormValidate(Object.values(personalData), error));
    setAcadmicDataError(useFormValidate(Object.values(acadmicData), error));
  };

  useEffect(() => {
    if (
      Object.keys(acadmicDataError).length > 0 ||
      Object.keys(personalDataError).length > 0
    ) {
      alert("Please fill the data");
      return;
    } else {
      Object.keys(personalData).forEach((data) => {
        delete personalData[data].newData;
      });
      Object.keys(acadmicData).forEach((data) => {
        delete acadmicData[data].newData;
      });
      console.log("use effect call");
      setEveryThingOk(true);
    }
  }, [personalDataError, acadmicDataError]);

  console.log("Edit user", editUser);
  useEffect(() => {
    console.log("use Effect is called");
    if (everyThingOk) {
      console.log("use Effect is called inside if block");
      let URL = undefined;
      console.log("use iffect now here");
      if (editUser.newUser && editUser.role === "student") {
        // URL="https://school-erp-api.vercel.app/login/admin";
        URL = `http://localhost:3000/${auth.userId}/new/student`;
        console.log("The URL is set for POST the data");
      } else if (editUser.newUser && editUser.role === "teacher") {
        // URL="https://school-erp-api.vercel.app/login";
        URL = "http://localhost:3000/new/teacher";
        console.log("The URL is set for POST the data for teacher");
      }
     if(URL){
      axios
      .post(URL, {
        userRole: editUser.role,
        recordId: editUser.recordId,
        personalInformation: personalData,
        acadmicInformation: acadmicData,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
     }
    }
  }, [everyThingOk]);
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.login) {
      navigate("/");
    }
  }, [auth]);
  return (
    <>
      <div className={BackgroundCSS.mainBackgroundContainer}>
        <div className={BackgroundCSS.backgroundHeader}>
          <div className={BackgroundCSS.arrow}>{"<"}</div>
          <div className={BackgroundCSS.middleButton}>
            <span>Attandance</span>
            <span>Holidays</span>
          </div>
          <div className={BackgroundCSS.rightButton}>Done</div>
          <div className={BackgroundCSS.rightButton} onClick={handleSubmit}>
            Submit
          </div>
          <div className={BackgroundCSS.forMobile}>
            <div className={BackgroundCSS.upperButton}>
              <div className={BackgroundCSS.mobileArrow}>{"<"}</div>
              <div className={BackgroundCSS.mobileRightButton}>Done</div>
            </div>
            <div className={BackgroundCSS.mobileMiddleButton}>
              <span>Attandance</span>
              <span>Holidays</span>
            </div>
          </div>
        </div>
        <div className={BackgroundCSS.backgroundContainer}>
          <div className={BackgroundCSS.backgroundCurve}>
            {auth.login ? (
              <Outlet context={[acadmicDataError, personalDataError]} />
            ) : (
              ""
            )}

            {/* <MyProfile acadmicDataError={acadmicDataError} personalDataError={personalDataError} /> */}
            {/* <TimeTable /> */}
            {/* <Quiz /> */}
            {/* <Calender /> */}
            {/* <FeesDue /> */}
          </div>
          <img src={bottumImage} alt="" className={BackgroundCSS.buttonImage} />
        </div>
      </div>
    </>
  );
};
export default Background;
