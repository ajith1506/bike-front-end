import { createContext, useEffect, useReducer, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Correct import statement

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("lists")) ?? null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(state.user));
  }, [state.user]); // Watch for changes in state.user instead of state.token

  const [decodedTkn, setDecodedTkn] = useState("");

  useEffect(() => {
    const fetchTokenData = () => {
      const authToken = localStorage.getItem("token");
      let decodedToken = null;
      if (authToken) {
        try {
          decodedToken = jwtDecode(authToken);
        } catch (error) {
          // Handle invalid token
          console.error("Error decoding token:", error);
        }
      }
      setDecodedTkn(decodedToken);
    };
    fetchTokenData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        decodedTkn,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
