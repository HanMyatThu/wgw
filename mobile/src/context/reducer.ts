import { cardInterface } from "interfaces";

type StateType = { cards: cardInterface[] , index: number};

type ActionType = { type: 'updateCards' , payload: any } ;

export default function reducer(state : StateType, action : ActionType) {
  switch (action.type) {
    case "updateCards":
      return { ...state, cards: action.payload, index: state.cards.length};
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}
