export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const GET_WEATHER = "GET_WEATHER"
export const getWeather = weather => ({
  type: GET_WEATHER,
  weather,
})
export const MAKE_IT_SNOW = "MAKE_IT_SNOW"
export const makeItSnow = () => ({
  type: MAKE_IT_SNOW,
})
