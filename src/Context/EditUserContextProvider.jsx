import React, { createContext, useState } from "react";

export const EditUserContext = createContext();

const EditUserContextProvider = ({ children }) => {
  const [editUser, setEditUser] = useState();
  return (
    <EditUserContext.Provider value={[editUser, setEditUser]}>
      {children}
    </EditUserContext.Provider>
  );
};

export default EditUserContextProvider;
