import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  const getProfiles = () => {
    const { users } = api;
    setProfiles(users);
  };
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <LoginContext.Provider value={profiles}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
