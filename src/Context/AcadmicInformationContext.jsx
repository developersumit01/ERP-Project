import React, { createContext, useState } from "react";

export const AcadmicInformationContext = createContext();

const AcadmicInformationContextProvider = ({ children }) => {
  const [acadmicInformation, setAcadmicInformation] = useState({});
  return (
    <AcadmicInformationContext.Provider
      value={[acadmicInformation, setAcadmicInformation]}>
      {children}
    </AcadmicInformationContext.Provider>
  );
};

export default AcadmicInformationContextProvider;
