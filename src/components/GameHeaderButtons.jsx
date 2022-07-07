import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import fullIcon from '../assets/img/ui/volume/full-icon.svg'
import emptyIcon from '../assets/img/ui/volume/empty-icon.svg'
import soundOff from '../assets/img/ui/volume/sound-off.svg'
import soundOn from '../assets/img/ui/volume/sound-on.svg'
import menuButton from '../assets/img/ui/menuButton.svg'
import letterBoard from '../assets/img/ui/hud/letterBoard.svg'

const GameHeaderButtons = ({ music, isPlayedYolo, volume, setVolume }) => {
  const getCookie = cname => {
    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  const [isSound, setIsSound] = useState(false)
  const [soundState, setSoundState] = useState(false)
  const [checkVolume, setCheckVolume] = useState([])

  useEffect(() => {
    if (
      isPlayedYolo &&
      music?.current.audioEl.current.isConnected &&
      getCookie('volumeToggle') === 'true'
    ) {
      play()
    } else {
      setIsSound(false)
    }
  }, [soundState, isPlayedYolo])

  useEffect(() => {
    getCookie('volumeToggle') === 'false' &&
      music?.current.audioEl.current.pause()
  }, [isSound])
  const play = () => {
    isPlayedYolo && (music?.current.audioEl.current.play(), setIsSound(true))
  }

  useEffect(() => {
    //soundOn icon when volume changes
    if (volume > 0) {
      document.cookie = 'volume=' + volume
    }
    //handle display of sound icons depending on where the user clicks
    const result = []
    let volumeValue = 0
    // isPlayedYolo && setIsSound(true)
    for (let i = 0; i < 5; i++) {
      volumeValue += 20
      if (volume >= volumeValue) {
        result.push(true)
      } else {
        result.push(false)
      }
    }
    setCheckVolume(result)
    document.cookie = 'volumeToggle=true'
    setSoundState(!soundState)
  }, [volume])

  const handleSound = () => {
    getCookie('volumeToggle') === 'true'
      ? (document.cookie = 'volumeToggle=false')
      : (document.cookie = 'volumeToggle=true')
    setSoundState(!soundState)
  }

  return (
    <div className='gameHeaderButtons'>
      <Link className='gameHeaderMenu' to='/contact'>
        <img className='contactButton' src={letterBoard} alt='Contact button' />
      </Link>
      <Link className='gameHeaderMenu' to='/'>
        <img src={menuButton} alt='Menu button' />
      </Link>
      <div className='gameHeaderSound'>
        <img
          className='soundOnOff'
          src={isSound ? soundOn : soundOff}
          alt={isSound ? 'Sound: activated' : 'Sound: deactivated'}
          onClick={handleSound}
        />
        {checkVolume.map((volumePoint, index) =>
          isSound && volumePoint ? (
            <img
              className='volumeFull'
              src={fullIcon}
              key={index}
              alt='full volume icon'
              onClick={() => {
                setVolume((index + 1) * 20)
              }}
              id={`soundIcon${index}`}
            />
          ) : (
            <img
              className='volumeEmpty'
              src={emptyIcon}
              key={index}
              alt='empty volume icon'
              onClick={() => setVolume((index + 1) * 20)}
              id={`soundIcon${index}`}
            />
          )
        )}
      </div>
    </div>
  )
}

export default GameHeaderButtons
