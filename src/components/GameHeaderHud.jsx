import GameHeaderHudGold from './GameHeaderHudGold'
import GameHeaderHudHealth from './GameHeaderHudHealth'
import GameHeaderHudInventory from './GameHeaderHudInventory'
import GameHeaderHudPortrait from './GameHeaderHudPortrait'

const GameHeaderHud = ({ hero }) => {
  return (
    <div className='gameHeaderHud'>
      <div className='mainHud'>
        <GameHeaderHudPortrait hero={hero} />
        <div className='stats'>
          <GameHeaderHudHealth hero={hero} />
          <GameHeaderHudGold hero={hero} />
        </div>
      </div>
      <GameHeaderHudInventory hero={hero} />
    </div>
  )
}

export default GameHeaderHud
