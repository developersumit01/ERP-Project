import React, { useState } from "react";
import NewUserCSS from "../../CSS/NewUser.module.css";
import SelectOption from "../SelectOption";
import { useNavigate, useParams } from "react-router-dom";
const array = ["Teacher", "Student"];
const NewUser = () => {
  const [option, setOption] = useState(undefined);
  const parems=useParams()
  const navigate=useNavigate();
      const handleOption=(e)=>{
            setOption(e.target.value);
      }
      const handleClick=()=>{
            if(option){
                  navigate(`/${parems.userName}/profile`,{state:{option:option}})
            }else{
                  alert("Please select the option")
            }
      }
  return (
    <>
      <div className={NewUserCSS.container}>
        <SelectOption
          name={"demo"}
          value={option}
          values={array}
          handleOption={handleOption}
        />
        <button onClick={handleClick}>{`Add New ${option?option:""}`}</button>
      </div>
    </>
  );
};

export default NewUser;
