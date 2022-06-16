import GameHeaderHud from './GameHeaderHud'

const GameHeader = ({ hero }) => {
  return (
    <div className='gameHeader'>
      <GameHeaderHud hero={hero} />
    </div>
  )
}

export default GameHeader
