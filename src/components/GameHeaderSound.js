import { useState } from 'react'



import FullIcon from '../assets/img/ui/volume/full-icon.svg'
import EmptyIcon from '../assets/img/ui/volume/empty-icon.svg'
import SoundOff from '../assets/img/ui/volume/sound-off.svg'
import SoundOn from '../assets/img/ui/volume/sound-on.svg'

const GameHeaderSound = () => {
  const [isSound, setIsSound] = useState(true)

  return (
    <div className='gameHeaderSound'>
      <img className='soundOn' src={SoundOn} alt='Sound: activated' />
    </div>
  )
}

export default GameHeaderSound
