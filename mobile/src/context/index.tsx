import React, { createContext, useContext, useReducer, Dispatch } from "react";
import reducer from "./reducer";
import { cardInterface } from "interfaces";

interface IInitialState {
  cards: cardInterface[],
  index: number
}

type ActionType = { type: 'updateCards', payload: any };

const initialState: IInitialState = {
  cards: [],
  index: 0
};

export const Context = createContext<[IInitialState, Dispatch<ActionType>]>([initialState, () => { }]);
export const useCardRequest = () => useContext(Context);

type TProvider = {
  children: React.ReactNode
}

export default function Provider({ children }: TProvider) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}
