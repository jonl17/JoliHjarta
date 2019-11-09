import { BIRD_STATE } from "./animationAction"

const initialState = {
  birdState: "stay",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case BIRD_STATE:
      return { ...state, birdState: action.state }
    default:
      return state
  }
}
