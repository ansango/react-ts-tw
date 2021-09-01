import { createContext, useContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthTypes from "./AuthTypes";

interface IUser {
  email: string;
}

interface IAuthState {
  user: any;
  logged: boolean;
  login: any;
  logout: any;
}

const initialState: IAuthState = {
  user: null,
  logged: false,
  login: null,
  logout: null,
};

const AuthContext = createContext<Partial<IAuthState>>({});

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const login = (user: IUser) =>
    dispatch({ type: AuthTypes.login, payload: user });
  const logout = () => dispatch({ type: AuthTypes.logout });
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
