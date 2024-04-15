import lockIcon from "../assets/Icons/ic_lock.svg";
import InputFieldCSS from "../CSS/InputField.module.css";
const InputField = ({ name, value, editable }) => {
  return (
    <>
      <div className={InputFieldCSS.inputContainer}>
        <label className={InputFieldCSS.lable}>{`${name} : `}</label>
        <div className={InputFieldCSS.input}>
        <textarea name={name} type="text" value={value} readOnly={!editable} />
        <span className={InputFieldCSS.borderAnimation}></span>
        {!editable ? (
          <span className={InputFieldCSS.lockIcon}>
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
