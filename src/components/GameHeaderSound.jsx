import { useState } from 'react'

import FullIcon from '../assets/img/ui/volume/full-icon.svg'
import EmptyIcon from '../assets/img/ui/volume/empty-icon.svg'
import SoundOff from '../assets/img/ui/volume/sound-off.svg'
import SoundOn from '../assets/img/ui/volume/sound-on.svg'

const GameHeaderSound = () => {
  const [isSound, setIsSound] = useState(true)

  const handleSound = () => {
    setIsSound(!isSound)
  }

  return (
    <div className='gameHeaderSound'>
      <img
        className='soundOn'
        src={isSound ? SoundOn : SoundOff}
        alt='Sound: activated'
        onClick={handleSound}
      />
      <img className='volumeFull' src={FullIcon} />
      <img className='volumeFull' src={FullIcon} />
      <img className='volumeFull' src={FullIcon} />
      <img className='volumeFull' src={FullIcon} />
      <img className='volumeEmpty' src={EmptyIcon} />
    </div>
  )
}

export default GameHeaderSound
