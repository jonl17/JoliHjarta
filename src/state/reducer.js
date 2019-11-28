import {
  SET_DEVICE,
  SET_PLATFORM,
  GET_WEATHER,
  MAKE_IT_SNOW,
  GET_GLUGGAR,
  SELECT_DAY,
  TRIGGER_DAGUR_POPUP,
  GET_ALL_DAYS_INFO,
  TRIGGER_EVENT_POPUP,
  SELECT_EVENT,
  SELECT_CALENDER_DAY,
  TRIGGER_BURGER_WINDOW,
  GET_TODAYS_CALENDER_DAY,
} from "./action"

const initialState = {
  device: undefined, // meta device
  platform: undefined, // macro device
  weather: {
    hiti: undefined,
    lysing: undefined,
    snjolysing: undefined,
  },
  makeItSnow: false,
  gluggar: undefined,
  selectedDay: undefined,
  dagurPopup: "closed",
  allDaysInfo: undefined,
  eventPopup: "closed",
  selectedEvent: undefined,
  selectedCalenderDay: -1,
  todaysCalenderDay: -1,
  burgerWindow: "closed",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      return { ...state, device: action.width > 1050 ? `browser` : `mobile` }
    case SET_PLATFORM:
      let platform
      if (state.device === `browser`) {
        // set different browser sizes
        if (action.width > 1050 && action.width <= 1450) {
          platform = `litill-skjar`
        } else if (action.width > 1450) {
          platform = `stor-skjar`
        }
      }
      if (state.device === `mobile`) {
        // set different mobile sizes
        if (action.width <= 750) {
          platform = `simi`
        } else if (action.width > 750 && action.width <= 1050) {
          platform = `spjaldtolva`
        }
      }
      return { ...state, platform: platform }
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
    case GET_ALL_DAYS_INFO:
      return { ...state, allDaysInfo: action.info }
    case TRIGGER_EVENT_POPUP:
      return { ...state, eventPopup: action.trigger }
    case SELECT_EVENT:
      return { ...state, selectedEvent: action.event }
    case SELECT_CALENDER_DAY:
      return { ...state, selectedCalenderDay: action.number }
    case TRIGGER_BURGER_WINDOW:
      return { ...state, burgerWindow: action.trigger }
    case GET_TODAYS_CALENDER_DAY:
      let day = action.day
      if (day > 24) {
        day = 24 // just so it doesn't go over the 24 of desember
      }
      return { ...state, todaysCalenderDay: day }
    default:
      return state
  }
}
