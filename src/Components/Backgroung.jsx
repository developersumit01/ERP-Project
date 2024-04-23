import BackgroundCSS from"../CSS/Background.module.css";
import bottumImage from '../assets/images/bottumImage.svg';
import MyProfile from "./MyProfile";
import TimeTable from "./TimeTable";
import Calender from './Calender'
import Quiz from "./Quiz";
import { Outlet } from "react-router-dom";
import FeesDue from "./FeesDue";
import { useContext, useState } from "react";
import useFormValidate from "../hooks/useFormValidate";
import {error} from '../Context/MyProfileErrors';
import { PersonalInformationContext } from "../Context/PersonalInformationContext";
import { AcadmicInformationContext } from "../Context/AcadmicInformationContext";

const Background = () => {
  const [personalDataError, setPersonalDataError] = useState({})
  const [acadmicDataError, setAcadmicDataError] = useState({})
  const [personalData]=useContext(PersonalInformationContext);
  const [acadmicData]=useContext(AcadmicInformationContext);
  const handleEdit=()=>{
    setPersonalDataError(useFormValidate(Object.values(personalData),error));
    setAcadmicDataError(useFormValidate(Object.values(acadmicData),error));
  }
  return (
    <>
    {/* // <Outlet /> */}
      <div className={BackgroundCSS.mainBackgroundContainer}>
      <div className={BackgroundCSS.backgroundHeader}>
            <div className={BackgroundCSS.arrow}>{"<"}</div>
            <div className={BackgroundCSS.middleButton}>
              <span>Attandance</span>
              <span>Holidays</span>
            </div>
            <div className={BackgroundCSS.rightButton} onClick={handleEdit} >Done</div>
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
            <MyProfile acadmicDataError={acadmicDataError} personalDataError={personalDataError} />
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