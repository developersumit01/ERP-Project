import React, { useContext, useState } from "react";
import NewUserCSS from "../../CSS/NewUser.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { EditUserContext } from "../../Context/EditUserContextProvider";
const NewUser = () => {
  const [option, setOption] = useState(undefined);
  const [recordId, setRecordId] = useState(undefined);
  const [editUser, setEditUser] = useContext(EditUserContext);
  const [branch, setBranch] = useState(undefined);
  const [branchName, setBranchName] = useState("");
  const parems = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    if (option) {
      if (option === "Teacher") {
        setEditUser({
          newUser: true,
          edit: false,
          role: "teacher",
          recordId:recordId,
        });
      } else {
        setEditUser({
          newUser: true,
          edit: false,
          role: "student",
          recordId:recordId,
        });
      }
      navigate(`/${parems.userName}/profile`, {
        state: { option: option, recordId: recordId,branch:branchName },
      });
    } else {
      alert("Please select the option");
    }
  };

  const handleSelect = (e) => {
    if (e.target.value == "Student" || e.target.value == "Teacher") {
      setOption(e.target.value);
    } else {
      const branch = e.target.value;
      const d = new Date();
      let year = "" + d.getFullYear();
      const recordId =
        year[2] + year[3] + (parseInt(year[2] + year[3]) + 1) + branch;
      setBranch(branch);
      setBranchName(e.target.options[e.target.selectedIndex].text);
      setRecordId(recordId);
    }
  };
  return (
    <>
      <div className={NewUserCSS.container}>
        <select
          value={option}
          onChange={handleSelect}
          className={NewUserCSS.selectOption}>
          <option hidden>Select</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
        <select
          value={branch}
          onChange={handleSelect}
          className={NewUserCSS.selectOption}>
          <option hidden>Select Branch</option>
          <option value="13">Information Technology</option>
          <option value="10">Computer Science and Engineering</option>
          <option value="40">Mechanical Engineering</option>
          <option value="21">Electrical & Electronics Engineering</option>
          <option value="31">Electronics and Communication Engineering</option>
          <option value="00">Civil Engineering</option>
          <option value="50">Bachelor of Pharmacy</option>
        </select>
        <button onClick={handleClick}>{`Add New ${
          option ? option : ""
        }`}</button>
      </div>
    </>
  );
};

export default NewUser;
