import InputField from "./InputField";
import MyProfileCSS from "../CSS/MyProfile.module.css";
import { useContext, useEffect } from "react";
import { AcadmicInformationContext } from "../Context/AcadmicInformationContext";
import { PersonalInformationContext } from "../Context/PersonalInformationContext";
import { useLocation, useOutletContext } from "react-router-dom";
import studentProfile from "../assets/images/studentProfile.png";
import SelectOption from "./SelectOption";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const MyProfile = () => {
  const [auth] = useContext(AuthContext);
  const [acadmicDataError, personalDataError] = useOutletContext();
  const location = useLocation();

  const [acadmicInformation, setAcadmicInformation] = useContext(
    AcadmicInformationContext
  );
  const [personalformation, setPersonalInformation] = useContext(
    PersonalInformationContext
  );

  useEffect(() => {
    if (location.state) {
      if (location.state.option === "Student") {
        axios
          // .get(`https://school-erp-api.vercel.app/${auth.userId}/dashboard`, {
          .get(`http://localhost:3000/${auth.userId}/new`, {
            params: location.state,
          })
          .then((response) => {
            const { data } = response;
            setPersonalInformation(data.personalInformation);
            setAcadmicInformation(data.acadmicInformation);
          })
          .catch((error) => {
            console.log("The error is", error);
          });
      }
    }
  }, []);

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
                <>
                  {ele.options ? (
                    <SelectOption
                    name={ele.name}
                    value={ele.value}
                    values={ele.options}
                    editable={ele.editable}
                    handleChange={handlePersonalInfo}
                    error={personalDataError[ele.name]}
                    edit={ele.edit}
                    newData={ele.newData ? ele.newData : false}
                    handleEditClick={handleEditClickPersonalInfo}
                    key={ele.name}
                  />
                  ) : (
                    <InputField
                      name={ele.name}
                      value={ele.value}
                      editable={ele.editable}
                      handleChange={handlePersonalInfo}
                      error={personalDataError[ele.name]}
                      edit={ele.edit}
                      newData={ele.newData ? ele.newData : false}
                      handleEditClick={handleEditClickPersonalInfo}
                      key={ele.name}
                    />
                  )}
                </>
              );
            })}
          </div>
          <div className={MyProfileCSS.photo}>
            <img src={studentProfile} alt="Profile Image" />
          </div>
        </div>
        <div className={MyProfileCSS.personalInfo}>
          {Object.values(acadmicInformation).map((ele) => {
            return (
              <>
                {ele.options ? (
                  <SelectOption
                  name={ele.name}
                  value={ele.value}
                  values={ele.options}
                  editable={ele.editable}
                  handleChange={handleAcadmicInfo}
                  error={acadmicDataError[ele.name]}
                  edit={ele.edit}
                  newData={ele.newData ? ele.newData : false}
                  handleEditClick={handleEditClickAcadmicInfo}
                  key={ele.name}
                  />
                ) : (
                  <InputField
                    name={ele.name}
                    value={ele.value}
                    editable={ele.editable}
                    handleChange={handleAcadmicInfo}
                    error={acadmicDataError[ele.name]}
                    edit={ele.edit}
                    newData={ele.newData ? ele.newData : false}
                    handleEditClick={handleEditClickAcadmicInfo}
                    key={ele.name}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MyProfile;
