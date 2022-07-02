import { useEffect } from 'react'
import useSound from 'use-sound'
import WuTangLogo from '../assets/img/wu-tang-logo.webp'
import winMusic from '../assets/sounds/win-million.mp3'

const WonMillion = ({ username }) => {
  const [winnerMusic] = useSound(winMusic)

  useEffect(() => {
    winnerMusic()
  }, [winnerMusic])

  return (
    <div className='won-million'>
      <span>Congratulations {username} - you just won one million pounds!</span>
      <div><img src={WuTangLogo} className='wu-tang-logo' alt="Wu Tang Clan logo" /></div>
    </div>
  )
}

export default WonMillion