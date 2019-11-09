import { combineReducers } from "redux"
import reducer from "./reducer"
import animationReducer from "./animationReducer"

export default combineReducers({ reducer, animationReducer })
