import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  isPlaying: true,
  error: false,
};

export const Context = createContext(INITIAL_STATE);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  return (
    <Context.Provider
      value={{
        isPlaying: state.isPlaying,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
