import { SET_DEVICE, GET_WEATHER, MAKE_IT_SNOW } from "./action"

const initialState = {
  device: undefined,
  weather: {
    hiti: undefined,
    lysing: undefined,
    snjolysing: undefined,
  },
  makeItSnow: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        device = `tablet`
      }
      if (action.width > 1050) {
        device = `browser`
      }
      return { ...state, device: device }
    case GET_WEATHER:
      return {
        ...state,
        weather: {
          hiti: action.weather.hiti,
          lysing: action.weather.lysing,
          snjolysing: action.weather.snjolysing,
        },
      }
    case MAKE_IT_SNOW:
      return { ...state, makeItSnow: !state.makeItSnow }
    default:
      return state
  }
}
