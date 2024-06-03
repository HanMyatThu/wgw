import { cardInterface } from "interfaces";

type StateType = { cards: cardInterface[] };

type ActionType = { type: 'updateCards' , payload: any } ;

export default function reducer(state : StateType, action : ActionType) {
  switch (action.type) {
    case "updateCards":
      return { ...state, cards: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}
