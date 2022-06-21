import GameHeaderHudGold from './GameHeaderHudGold'
import GameHeaderHudHealth from './GameHeaderHudHealth'
import GameHeaderHudPortrait from './GameHeaderHudPortrait'

const GameHeaderHud = ({ hero }) => {
  return (
    <div className='gameHeaderHud'>
      <GameHeaderHudPortrait hero={hero} />
      <div className='stats'>
        <GameHeaderHudHealth hero={hero} />
        <GameHeaderHudGold hero={hero} />
      </div>
    </div>
  )
}

export default GameHeaderHud
