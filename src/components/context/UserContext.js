import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [subjects, setSubjects] = useState();

  const getData = () => {
    const { curriculum } = api;
    setSubjects(curriculum);
  };

  useEffect(() => {
    if (!subjects) {
      getData();
    }
  }, [subjects]);

  return (
    <UserContext.Provider value={{ subjects, setSubjects }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
