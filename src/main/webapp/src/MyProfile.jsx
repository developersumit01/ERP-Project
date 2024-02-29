import InputField from "./InputField";
import "./MyProfile.css";
const MyProfile = ({ acadmicInfo, personalData }) => {
  return (
    <>
      <div className="my-profile-container">
        <div className="acadmic-info">
          <div className="acadmic-data">
          {acadmicInfo.map((ele) => {
            return (
              <InputField
                name={ele.name}
                value={ele.value}
                editable={ele.editable}
              />
            );
          })}
          </div><div className="photo">
              <img src={''} alt="Profile Image" />
            </div>
        </div>
        <div className="personal-info">
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
