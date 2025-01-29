import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password, role) => {
    try {
      const response = await axios.get("REACT_APP_LOCALHOST_ADDRESS/users", {
        params: { email, password, role },
      });

      if (response.data.length > 0) {
        const userData = response.data[0];
        if (userData.role !== role) {
          return false;
        }
        const token = btoa(JSON.stringify(userData)); // Simple token creation
        userData.token = token;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const register = async (userData) => {
    try {
      const existingUser = await axios.get(
        `REACT_APP_LOCALHOST_ADDRESS/users?email=${userData.email}`
      );
      if (existingUser.data.length > 0) {
        return false;
      }
      const response = await axios.post(
        "REACT_APP_LOCALHOST_ADDRESS/users",
        userData
      );
      //   const res = response.data;
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
