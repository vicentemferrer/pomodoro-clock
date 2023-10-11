/* eslint-disable react/prop-types */
import { timerParser } from "../data/env.js"

export function Timer({ timer, reset, startStop, dispatch }) {

  const { timeType, time, timerRunning } = timer

  return (
    <div id="timer-pad">
      <h3 id="timer-label">{timeType}</h3>
      <div id="time-left" className={time < 60 ? "ontime" : ""}>{timerParser(time)}</div>
      <button onClick={() => dispatch(startStop())} id="start_stop"><i className={!timerRunning ? "fa-solid fa-play" : "fa-solid fa-pause"}></i></button>
      <button onClick={reset} id="reset"><i className="fa-solid fa-rotate-left"></i></button>
    </div>
  )
}