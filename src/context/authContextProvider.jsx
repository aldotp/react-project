import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <>
      <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
