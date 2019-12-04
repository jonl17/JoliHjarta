export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const SET_PLATFORM = "SET_DEVICE_DETAILS"
export const setPlatform = width => ({
  type: SET_PLATFORM,
  width,
})
export const GET_WEATHER = "GET_WEATHER"
export const getWeather = weather => ({
  type: GET_WEATHER,
  weather,
})
export const MAKE_IT_SNOW = "MAKE_IT_SNOW"
export const makeItSnow = trigger => ({
  type: MAKE_IT_SNOW,
  trigger,
})
export const GET_GLUGGAR = "GET_GLUGGAR"
export const getGluggar = gluggar => ({
  type: GET_GLUGGAR,
  gluggar,
})
export const SELECT_DAY = "SELECT_DAY"
export const selectDay = day => ({
  type: SELECT_DAY,
  day,
})
export const TRIGGER_DAGUR_POPUP = "TRIGGER_DAGUR_POPUP"
export const triggerDagurPopup = trigger => ({
  /** the trigger is either open or closed */
  type: TRIGGER_DAGUR_POPUP,
  trigger,
})
export const GET_ALL_DAYS_INFO = "GET_ALL_DAYS_INFO"
export const getAllDaysInfo = info => ({
  type: GET_ALL_DAYS_INFO,
  info,
})
export const TRIGGER_EVENT_POPUP = "TRIGGER_EVENT_POPUP"
export const triggerEventPopup = trigger => ({
  /** the trigger is either open or closed */
  type: TRIGGER_EVENT_POPUP,
  trigger,
})
export const SELECT_EVENT = "SELECT_EVENT"
export const selectEvent = event => ({
  type: SELECT_EVENT,
  event,
})
export const SELECT_CALENDER_DAY = "SELECT_CALENDER_DAY"
export const selectCalenderDay = number => ({
  type: SELECT_CALENDER_DAY,
  number,
})
export const TRIGGER_BURGER_WINDOW = "TRIGGER_BURGER_WINDOW"
export const triggerBurgerWindow = trigger => ({
  type: TRIGGER_BURGER_WINDOW,
  trigger,
})
export const GET_TODAYS_CALENDER_DAY = "GET_TODAYS_CALENDER_DAY"
export const getTodaysCalenderDay = day => ({
  type: GET_TODAYS_CALENDER_DAY,
  day,
})
export const TRIGGER_VIDEO_FULLSCREEN = "TRIGGER_VIDEO_FULLSCREEN"
export const triggerVideoFullscreen = () => ({
  type: TRIGGER_VIDEO_FULLSCREEN,
})
export const TRIGGER_CALENDER_WINDOW = "TRIGGER_CALENDER_WINDOW"
export const triggerCalenderWindow = () => ({
  type: TRIGGER_CALENDER_WINDOW,
})
export const TRIGGER_SENDU_INN_EFNI = "TRIGGER_SENDU_INN_EFNI"
export const triggerSenduInnEfni = trigger => ({
  type: TRIGGER_SENDU_INN_EFNI,
  trigger,
})
