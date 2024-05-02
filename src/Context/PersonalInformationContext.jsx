import React, { createContext, useState } from "react";

export const PersonalInformationContext = createContext();

const PersonalInformationContextProvider = ({ children }) => {
  const [personalInformation, setPersonalInformation] = useState({});
  return (
    <PersonalInformationContext.Provider
      value={[personalInformation, setPersonalInformation]}>
      {children}
    </PersonalInformationContext.Provider>
  );
};

export default PersonalInformationContextProvider;
