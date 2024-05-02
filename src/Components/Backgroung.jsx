import BackgroundCSS from "../CSS/Background.module.css";
import bottumImage from "../assets/images/bottumImage.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useFormValidate from "../hooks/useFormValidate";
import { error } from "../Context/MyProfileErrors";
import { PersonalInformationContext } from "../Context/PersonalInformationContext";
import { AcadmicInformationContext } from "../Context/AcadmicInformationContext";
import { AuthContext } from "../Context/AuthContext";

const Background = () => {
  const [personalDataError, setPersonalDataError] = useState({});
  const [acadmicDataError, setAcadmicDataError] = useState({});
  const [personalData] = useContext(PersonalInformationContext);
  const [acadmicData] = useContext(AcadmicInformationContext);
  const handleEdit = () => {
    setPersonalDataError(useFormValidate(Object.values(personalData), error));
    setAcadmicDataError(useFormValidate(Object.values(acadmicData), error));
  };
  const handleSubmit=()=>{
    setPersonalDataError(useFormValidate(Object.values(personalData), error));
    setAcadmicDataError(useFormValidate(Object.values(acadmicData), error));
    if(personalData||acadmicData){
      return;
    }
    useEffect(()=>{
      console.log("Hello World")
    },[])
  }
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
          <div className={BackgroundCSS.rightButton} onClick={handleEdit}>
            Done
          </div>
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
