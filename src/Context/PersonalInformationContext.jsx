import React, { createContext, useState } from "react";

export const PersonalInformationContext = createContext();

const PersonalInformationContextProvider = ({ children }) => {
  const [personalInformation, setPersonalInformation] = useState({
    Name: { name: "Name", value: "Sumit Kumar", edit: false, editable: false },
    "Roll No.": {
      name: "Roll No.",
      value: "XXXXXXXXXXXXX",
      edit: false,
      editable: false,
    },
    "Father Name": {
      name: "Father Name",
      value: "Hariprasad",
      edit: false,
      editable: false,
    },
    "Mother Name": {
      name: "Mother Name",
      value: "Phool Kumari",
      edit: false,
      editable: false,
    },
    Gender: { name: "Gender", value: "Male", edit: false, editable: false },
    "D.O.B.": {
      name: "D.O.B.",
      value: "10/11/2000",
      edit: false,
      editable: false,
    },
    Course: {
      name: "Course",
      value: "Bechlor of Technology",
      edit: false,
      editable: false,
    },
    Branch: {
      name: "Branch",
      value: "Information Technology",
      edit: false,
      editable: false,
    },
  });
  return (
    <PersonalInformationContext.Provider
      value={[personalInformation, setPersonalInformation]}>
      {children}
    </PersonalInformationContext.Provider>
  );
};

export default PersonalInformationContextProvider;
