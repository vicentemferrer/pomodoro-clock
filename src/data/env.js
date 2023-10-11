function parse(number) {
  return number.toString().length === 1 ? `0${number}` : number
}

export function timerParser(time) {
  const minutes = parse(Math.floor(time / 60))
  const seconds = parse(time % 60)

  return `${minutes}:${seconds}`
}

export function setterParser(value, interval) {
  return Math.floor(value / interval)
}