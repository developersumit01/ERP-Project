import lockIcon from "../assets/Icons/ic_lock.svg";
import InputFieldCSS from "../CSS/InputField.module.css";
import EditIcon from "../assets/Icons/editIcon.png";
const InputField = ({
  name,
  value,
  editable,
  handleChange,
  error,
  edit,
  newData,
  handleEditClick,
}) => {
  return (
    <>
      <div className={InputFieldCSS.inputContainer}>
        <label className={InputFieldCSS.lable}>{`${name} : `}</label>
        <div className={InputFieldCSS.input}>
          <textarea
            name={name}
            type="text"
            value={value}
            readOnly={newData?false:!edit}
            onChange={handleChange}
          />
          <span className={InputFieldCSS.borderAnimation}></span>
          {!newData&&!editable ? (
            <span className={InputFieldCSS.lockIcon}>
              <img src={lockIcon} alt="Lock Icon" title="Can't Edit" />
            </span>
          ) : !newData&&!edit ? (
            <span className={InputFieldCSS.lockIcon}>
              <img
                src={EditIcon}
                alt="Edit Icon"
                title="Edit"
                name={name}
                onClick={handleEditClick}
              />
            </span>
          ) : (
            ""
          )}
          <span className={InputFieldCSS.error}>{error}</span>
        </div>
      </div>
    </>
  );
};
export default InputField;
