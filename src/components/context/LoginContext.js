import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [user, setUser] = useState(0);
  console.log(user);
  const getProfiles = () => {
    const { users } = api;
    setProfiles(users);
  };

  const login = (email, password) => {
    const findUser = profiles.filter(
      (profile) =>
        profile.email === email && profile.password == Number(password)
    );

    setUser(findUser);
  };
  const logout = () => {
    setUser(0);
  };
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <LoginContext.Provider value={{ profiles, login, user, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
