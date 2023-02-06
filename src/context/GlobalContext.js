import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";
import reducer, { initialState } from "./reducer";

const GlobalContext = createContext({});

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscripe = onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "SET_USER",
        payload: user,
      });
    });
    return () => {
      unsubscripe();
    };
  }, [state.user]);
  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        dispatch,
        signup,
        signin,
        signout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useData = () => {
  return useContext(GlobalContext);
};
