import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import fullIcon from '../assets/img/ui/volume/full-icon.svg'
import emptyIcon from '../assets/img/ui/volume/empty-icon.svg'
import soundOff from '../assets/img/ui/volume/sound-off.svg'
import soundOn from '../assets/img/ui/volume/sound-on.svg'
import menuButton from '../assets/img/ui/menuButton.svg'

const GameHeaderButtons = () => {
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

  const [isSound, setIsSound] = useState(getCookie('volumeToggle'))
  const [volume, setVolume] = useState(getCookie('volume'))
  const [checkVolume, setCheckVolume] = useState([])

  useEffect(() => {
    setVolume(getCookie('volume'))
    setIsSound(getCookie('volumeToggle'))
  }, [])

  useEffect(() => {
    //soundOn icon when volume changes
    if (volume > 0) {
      setIsSound(true)
      document.cookie = 'volume=' + volume
    }
    //handle display of sound icons depending on where the user clicks
    const result = []
    let volumeValue = 0
    for (let i = 0; i < 5; i++) {
      volumeValue += 20
      if (volume >= volumeValue) {
        result.push(true)
      } else {
        result.push(false)
      }
    }
    setCheckVolume(result)
  }, [volume])

  const handleSound = () => {
    setIsSound(!isSound)
    setVolume(isSound ? 0 : getCookie('volume'))
    document.cookie = 'volumeToggle=' + !isSound
  }

  return (
    <div className='gameHeaderButtons'>
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
          volumePoint ? (
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
