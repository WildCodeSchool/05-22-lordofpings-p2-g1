import Purse from '../assets/img/hud/purse.svg'

const GameHeaderHudGold = () => {
  return (
    <div className='gameHeaderHudGold'>
      <img src={Purse} className='purse' />
      <p className='goldAmount'>200</p>
    </div>
  )
}

export default GameHeaderHudGold
