import GameHeaderHud from './GameHeaderHud'
import GameHeaderButtons from './GameHeaderButtons'

const GameHeader = ({ hero, music, isPlayedYolo, volume, setVolume }) => {
  return (
    <div className='gameHeader'>
      <GameHeaderHud hero={hero} />
      <GameHeaderButtons
        music={music}
        isPlayedYolo={isPlayedYolo}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  )
}

export default GameHeader
