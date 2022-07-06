import GameHeaderHud from './GameHeaderHud'
import GameHeaderButtons from './GameHeaderButtons'

const GameHeader = ({ hero }) => {
  return (
    <div className='gameHeader'>
      <GameHeaderHud hero={hero} />

      <GameHeaderButtons />
    </div>
  )
}

export default GameHeader
