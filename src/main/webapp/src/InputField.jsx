import lockIcon from "./assets/Icons/ic_lock.svg";
import "./InputField.css";
const InputField = ({ name, value, editable }) => {
  return (
    <>
      <div className="input-container">
        <label className="lable">{`${name} : `}</label>
        <div className="input">
        <textarea name={name} type="text" value={value} readOnly={!editable} />
        <span className="border-animation"></span>
        {!editable ? (
          <span className="lock-icon">
            <img src={lockIcon} alt="" />
          </span>
        ) : (
          ""
        )}
        </div>
      </div>
    </>
  );
};
export default InputField;
