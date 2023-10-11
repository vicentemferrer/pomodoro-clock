import { createSlice } from "@reduxjs/toolkit";

const defaultSessionTime = 25 * 60
const defaultBreakTime = 5 * 60

const initialState = {
  "sessionTime": defaultSessionTime,
  "breakTime": defaultBreakTime,
  "timer": {
    time: defaultSessionTime,
    timeType: "Session",
    timerRunning: false
  }
}

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    decrementTime(state) {
      state.timer.time--
      if (state.timer.time < 0) {
        state.timer.time = state.timer.timeType === "Session" ? state["breakTime"] : state["sessionTime"]
        state.timer.timeType = state.timer.timeType === "Session" ? "Break" : "Session"
      }
    },
    reset(state) {
      Object.keys(state).map((key) => state[key] = initialState[key])
    },
    startStop(state) {
      state.timer.timerRunning = !state.timer.timerRunning
    },
    changeTime(state, { payload: { time, sessionType } }) {
      state[`${sessionType}Time`] = time
      if (state.timer.timeType.toLowerCase() !== sessionType) return
      state.timer.time = time
    }
  }
})

export const { decrementTime, reset, startStop, changeTime } = timerSlice.actions
export default timerSlice.reducer