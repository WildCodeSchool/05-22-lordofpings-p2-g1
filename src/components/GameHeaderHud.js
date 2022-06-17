import GameHeaderHudGold from './GameHeaderHudGold'
import GameHeaderHudHealth from './GameHeaderHudHealth'
import GameHeaderHudPortrait from './GameHeaderHudPortrait'

const GameHeaderHud = () => {
  return (
    <div className='gameHeaderHud'>
      <GameHeaderHudPortrait />
      <div className='stats'>
        <GameHeaderHudHealth />
        <GameHeaderHudGold />
      </div>
    </div>
  )
}

export default GameHeaderHud
