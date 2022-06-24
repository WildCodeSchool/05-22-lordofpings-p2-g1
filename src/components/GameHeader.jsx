import GameHeaderHud from './GameHeaderHud'
import GameHeaderSound from './GameHeaderButtons'

const GameHeader = ({ hero }) => {
  return (
    <div className='gameHeader'>
      <GameHeaderHud hero={hero} />

      <GameHeaderSound />
    </div>
  )
}

export default GameHeader
