import { useEffect, useState } from "react"

const Timer = ({ setTimeElapsed, questionNumber }) => {
  const [timer, setTimer] = useState(30)

  useEffect(() => {
    if (timer === 0) return setTimeElapsed(true)
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [setTimeElapsed, timer])

  useEffect(() => {
    setTimer(30)
  }, [questionNumber])

  return timer
}

export default Timer