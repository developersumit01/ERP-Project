import InputField from "./InputField";
import MyProfileCSS from "../CSS/MyProfile.module.css";
import { useContext, useState } from "react";
import useFormValidate from "../hooks/useFormValidate";
import { AcadmicInformationContext } from "../Context/AcadmicInformationContext";
import { PersonalInformationContext } from "../Context/PersonalInformationContext";

const MyProfile = ({ acadmicDataError, personalDataError }) => {
  const [acadmicInformation, setAcadmicInformation] = useContext(
    AcadmicInformationContext
  );
  const [personalformation, setPersonalInformation] = useContext(
    PersonalInformationContext
  );
  const handleAcadmicInfo = (event) => {
    setAcadmicInformation((prev) => ({
      ...prev,
      [event.target.name]: {
        ...acadmicInformation[event.target.name],
        ["value"]: event.target.value,
      },
    }));
  };
  const handlePersonalInfo = (event) => {
    setPersonalInformation((prev) => ({
      ...prev,
      [event.target.name]: {
        ...personalformation[event.target.name],
        ["value"]: event.target.value,
      },
    }));
  };

  const handleEditClickPersonalInfo = (event) => {
    setPersonalInformation((prev) => ({
      ...prev,
      [event.target.name]: {
        ...personalformation[event.target.name],
        ["edit"]: true,
      },
    }));
  };
  const handleEditClickAcadmicInfo = (event) => {
    setAcadmicInformation((prev) => ({
      ...prev,
      [event.target.name]: {
        ...acadmicInformation[event.target.name],
        ["edit"]: true,
      },
    }));
  };

  return (
    <>
      <div className={MyProfileCSS.myProfileContainer}>
        <div className={MyProfileCSS.acadmicInfo}>
          <div className={MyProfileCSS.acadmicData}>
            {Object.values(personalformation).map((ele) => {
              return (
                <InputField
                  name={ele.name}
                  value={ele.value}
                  editable={ele.editable}
                  handleChange={handlePersonalInfo}
                  error={personalDataError[ele.name]}
                  edit={ele.edit}
                  handleEditClick={handleEditClickPersonalInfo}
                />
              );
            })}
          </div>
          <div className={MyProfileCSS.photo}>
            <img src={""} alt="Profile Image" />
          </div>
        </div>
        <div className={MyProfileCSS.personalInfo}>
          {Object.values(acadmicInformation).map((ele) => {
            return (
              <InputField
                name={ele.name}
                value={ele.value}
                editable={ele.editable}
                handleChange={handleAcadmicInfo}
                error={acadmicDataError[ele.name]}
                edit={ele.edit}
                handleEditClick={handleEditClickAcadmicInfo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MyProfile;
