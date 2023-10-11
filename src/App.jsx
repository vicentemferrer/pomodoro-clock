import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementTime, reset, startStop, changeTime } from './store/timer.js'
import { Timer } from './components/Timer.jsx'
import { TimeSetter } from './components/TimeSetter.jsx'
import AlarmSound from './assets/alarmSound.mp3'
import './App.css'

function App() {
  const { sessionTime, breakTime, timer } = useSelector(state => state.timer)
  const dispatch = useDispatch()

  function getAudio() {
    return document.getElementById('beep')
  }

  function onReset() {
    const audio = getAudio()
    dispatch(reset())

    audio.pause()
    audio.currentTime = 0
  }

  function onDecrementTime() {
    dispatch(decrementTime())
  }

  function onChangeTime(time, sessionType) {
    dispatch(changeTime({ time, sessionType }))
  }

  useEffect(() => {
    let timerID

    if (!timer.timerRunning) return

    if (timer.timerRunning) {
      timerID = window.setInterval(onDecrementTime, 1000)
    }

    return () => {
      window.clearInterval(timerID)
    }
  }, [timer.timerRunning])

  useEffect(() => {
    if (timer.time === 0) {
      const audio = getAudio()
      audio.play()
    }
  }, [timer.time])

  return (
    <>
      <Timer timer={timer} reset={onReset} startStop={startStop} dispatch={dispatch} />
      <div id="controls-pad">
        <TimeSetter type={"break"} time={breakTime} setTime={onChangeTime} />
        <TimeSetter type={"session"} time={sessionTime} setTime={onChangeTime} />
      </div>
      <audio id='beep' src={AlarmSound} />
    </>
  )
}

export default App
