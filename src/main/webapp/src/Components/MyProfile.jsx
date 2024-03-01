import InputField from "./InputField";
import MyProfileCSS from "../CSS/MyProfile.module.css";
const MyProfile = ({ acadmicInfo, personalData }) => {
  return (
    <>
      <div className={MyProfileCSS.myProfileContainer}>
        <div className={MyProfileCSS.acadmicInfo}>
          <div className={MyProfileCSS.acadmicData}>
          {acadmicInfo.map((ele) => {
            return (
              <InputField
                name={ele.name}
                value={ele.value}
                editable={ele.editable}
              />
            );
          })}
          </div><div className={MyProfileCSS.photo}>
              <img src={''} alt="Profile Image" />
            </div>
        </div>
        <div className={MyProfileCSS.personalInfo}>
          {personalData.map((ele) => {
            return (
              <InputField
                name={ele.name}
                value={ele.value}
                editable={ele.editable}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MyProfile;
