import React from "react";
import SelectOptionCSS from "../CSS/SelectOption.module.css";
const SelectOption = ({ name, value, values, handleOption }) => {
  if (values[0] !== "Select") {
    values.unshift("Select");
  }
  return (
    <select value={value} onChange={handleOption} >
      {values.map((ele) => {
        return (
          <option value={ele} hidden={ele === "Select"} selected={value===ele}>
            {ele}
          </option>
        );
      })}
    </select>
  );
};

export default SelectOption;
