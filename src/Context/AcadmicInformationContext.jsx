import React, { createContext, useState } from "react";

export const AcadmicInformationContext = createContext();

const AcadmicInformationContextProvider = ({ children }) => {
  const [acadmicInformation, setAcadmicInformation] = useState({
    "Blood Group": {
      name: "Blood Group",
      value: "A+",
      edit: false,
      editable: true,
    },
    "Date of Admission": {
      name: "Date of Admission",
      value: "10/11/2000",
      edit: false,
      editable: false,
    },
    "Admission Session": {
      name: "Admission Session",
      value: "2020-21",
      edit: false,
      editable: false,
    },
    "Admission Semester": {
      name: "Admission Semester",
      value: "1",
      edit: false,
      editable: false,
    },
    College: {
      name: "College",
      value: "Bharat Institute of Technology, Meerut1",
      edit: false,
      editable: false,
    },
    Semester: { name: "Semester", value: "6", edit: false, editable: false },
    "Mobile No.": {
      name: "Mobile No.",
      value: "8439060298",
      edit: false,
      editable: true,
    },
    "Email ID": {
      name: "Email ID",
      value: "sumitkumar84390@gmail.com",
      edit: false,
      editable: true,
    },
    Address: {
      name: "Address",
      value: "278 Pocket C, Sector 4C",
      edit: false,
      editable: true,
    },
    Pincode: { name: "Pincode", value: "250103", edit: false, editable: true },
    City: { name: "City", value: "Meerut", edit: false, editable: false },
    State: {
      name: "State",
      value: "Utter Pradesh",
      edit: false,
      editable: false,
    },
    Country: { name: "Country", value: "India", edit: false, editable: false },
    "Addhar No.": {
      name: "Addhar No.",
      value: "4444 5555 6666",
      edit: false,
      editable: true,
    },
    "Home Mobile No.": {
      name: "Home Mobile No.",
      value: "8411111198",
      edit: false,
      editable: true,
    },
  });
  return (
    <AcadmicInformationContext.Provider
      value={[acadmicInformation, setAcadmicInformation]}>
      {children}
    </AcadmicInformationContext.Provider>
  );
};

export default AcadmicInformationContextProvider;
