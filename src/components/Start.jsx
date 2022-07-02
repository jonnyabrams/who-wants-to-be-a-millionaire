import { useRef } from "react"

const Start = ({ setUsername }) => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value) // stops it submitting blank value
  }

  return (
    <div className="start">
      <span className="logo">Wu Wants to Be a Millionaire?</span>
      <input placeholder="enter your name" className="start-input" ref={inputRef} />
      <button className="start-button" onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start