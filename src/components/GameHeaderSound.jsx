import { useState, useEffect } from 'react'

import fullIcon from '../assets/img/ui/volume/full-icon.svg'
import emptyIcon from '../assets/img/ui/volume/empty-icon.svg'
import soundOff from '../assets/img/ui/volume/sound-off.svg'
import soundOn from '../assets/img/ui/volume/sound-on.svg'

const GameHeaderSound = () => {
  const [isSound, setIsSound] = useState(true)

  const [volume, setVolume] = useState(100)
  const [checkVolume, setCheckVolume] = useState([])

  useEffect(() => {
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
    console.log(result)
    setCheckVolume(result)
  }, [volume])

  const handleSound = () => {
    setIsSound(!isSound)
    setVolume(isSound ? 0 : 100)
  }

  return (
    <div className='gameHeaderSound'>
      <img
        className='soundOnOff'
        src={isSound ? soundOn : soundOff}
        alt='Sound: activated'
        onClick={handleSound}
      />
      {checkVolume.map((volumePoint, index) =>
        volumePoint ? (
          <img
            className='volumeFull'
            src={fullIcon}
            key={index}
            alt='full volume icon'
            onClick={() => setVolume((index + 1) * 20)}
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
  )
}

export default GameHeaderSound
