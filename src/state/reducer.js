import {
  SET_DEVICE,
  GET_WEATHER,
  MAKE_IT_SNOW,
  GET_GLUGGAR,
  SELECT_DAY,
  TRIGGER_DAGUR_POPUP,
} from "./action"

const initialState = {
  device: undefined,
  weather: {
    hiti: undefined,
    lysing: undefined,
    snjolysing: undefined,
  },
  makeItSnow: false,
  gluggar: undefined,
  selectedDay: undefined,
  dagurPopup: "closed",
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
    case GET_GLUGGAR:
      return { ...state, gluggar: action.gluggar }
    case SELECT_DAY:
      return {
        ...state,
        selectedDay: action.day,
      } /** select the day and open window */
    case TRIGGER_DAGUR_POPUP:
      return { ...state, dagurPopup: action.trigger }
    default:
      return state
  }
}
