import { GET_CARDS } from "../actions/types";
import Fast from "../assets/images/clock.svg";
import Scalable from "../assets/images/images.svg";
import Flexible from "../assets/images/yoga.svg";

const initialState = {
  cardsData: [
    {
      title: "Fast",
      image: Fast,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasidicta dolor provident labore voluptatum cum maiores adipisci quodnemo! Culpa deleniti ullam iste aliquid ad unde accusamusaccusantium molestias."
    },
    {
      title: "Flexible",
      image: Flexible,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasidicta dolor provident labore voluptatum cum maiores adipisci quodnemo! Culpa deleniti ullam iste aliquid ad unde accusamusaccusantium molestias."
    },
    {
      title: "Scalable",
      image: Scalable,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasidicta dolor provident labore voluptatum cum maiores adipisci quodnemo! Culpa deleniti ullam iste aliquid ad unde accusamusaccusantium molestias."
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      const tempState = Object.assign({}, state);
      return tempState;
    default:
      return state;
  }
}
