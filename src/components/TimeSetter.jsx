/* eslint-disable react/prop-types */
import { setterParser } from "../data/env.js"

const min = 60
const max = 60 * 60
const interval = 60

export function TimeSetter({ type, time, setTime }) {
  return (
    <div>
      <h4 id={`${type}-label`}>{type} time</h4>
      <div className="controls">
        <button id={`${type}-decrement`} onClick={(e) => time > min && setTime(time - interval, e.target.id.split('-')[0])}>-</button>
        <p id={`${type}-length`}>{setterParser(time, interval)}</p>
        <button id={`${type}-increment`} onClick={(e) => time < max && setTime(time + interval, e.target.id.split('-')[0])}>+</button>
      </div>
    </div>
  )
}