import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

const GlobalContext = createContext({});

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useData = () => {
  return useContext(GlobalContext);
};
