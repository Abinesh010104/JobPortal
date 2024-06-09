import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const userContext = React.createContext();

const UserContext = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState({ status: false, message: "" });
  const [user, setUser] = useState(null);

  const handleFetchMe = async () => {
    setUserLoading(true);
    try {
      const response = await axios.get(
        `https://abinesh-job-portal-server.vercel.app/api/v1/auth/me`,
        {
          withCredentials: true,
        }
      );
      setUserError({ status: false, message: "" });
      setUser(response?.data?.result);
    } catch (error) {
      setUserError({ status: true, message: error?.message });
      setUser(null);
    }
    setUserLoading(false);
  };

  const handleLogin = async (data) => {
    setUserLoading(true);
    try {
      const response = await axios.post(
        "https://abinesh-job-portal-server.vercel.app/api/v1/auth/login",
        data,
        { withCredentials: true }
      );
      setUserError({ status: false, message: "" });
      setUser(response?.data?.result);
    } catch (error) {
      setUserError({ status: true, message: error?.response?.data });
      setUser(null);
    }
    setUserLoading(false);
  };

  const handleLogout = async () => {
    setUserLoading(true);
    try {
      await axios.post(
        "https://abinesh-job-portal-server.vercel.app/api/v1/auth/logout",
        {},
        { withCredentials: true }
      );
      setUserError({ status: false, message: "" });
      setUser(null);
    } catch (error) {
      setUserError({ status: true, message: error?.message });
    }
    setUserLoading(false);
  };

  useEffect(() => {
    handleFetchMe();
  }, []);

  const passing = {
    userLoading,
    userError,
    user,
    handleFetchMe,
    handleLogin,
    handleLogout,
  };
  return (
    <userContext.Provider value={passing}>{children}</userContext.Provider>
  );
};

const useUserContext = () => useContext(userContext);

export { useUserContext, UserContext };
