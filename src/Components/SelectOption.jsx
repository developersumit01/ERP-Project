import lockIcon from "../assets/Icons/ic_lock.svg";
import InputFieldCSS from "../CSS/InputField.module.css";
import EditIcon from "../assets/Icons/editIcon.png";
const SelectOption = ({
  name,
  value,
  values,
  handleChange,
  editable,
  error,
  edit,
  newData,
  handleEditClick,
}) => {
  if (values[0] !== "Select") {
    values.unshift("Select");
  }
  return (
    <div className={InputFieldCSS.inputContainer}>
      <label className={InputFieldCSS.lable}>{`${name} : `}</label>
      <div className={InputFieldCSS.input}>
        <select
          name={name}
          value={value}
          onChange={handleChange}
          disabled={newData ? false : !edit}
          >
          {values.map((ele) => {
            console.log(ele)
            return (
              <option
                value={ele}
                hidden={ele === "Select"}
                defaultValue={value === ele}
                key={crypto.randomUUID()}
                >
                  {ele}
              </option>
            );
          })}
        </select>
        <span className={InputFieldCSS.borderAnimation}></span>
        {!newData && !editable ? (
          <span className={InputFieldCSS.lockIcon}>
            <img src={lockIcon} alt="Lock Icon" title="Can't Edit" />
          </span>
        ) : !newData && !edit ? (
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
  );
};

export default SelectOption;
