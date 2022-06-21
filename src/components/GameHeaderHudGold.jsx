import Purse from '../assets/img/ui/hud/purse.svg'

const GameHeaderHudGold = ({ hero }) => {
  return (
    <div className='gameHeaderHudGold'>
      <img src={Purse} />
      <p>{hero.money}</p>
    </div>
  )
}

export default GameHeaderHudGold
