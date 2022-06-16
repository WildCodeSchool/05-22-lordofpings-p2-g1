import Heart from '../assets/img/hud/heart.svg'

const GameHeaderHudHealth = () => {
  return (
    <div className='gameHeaderHudHealth'>
      <img src={Heart} className='lifePoint' />
      <img src={Heart} className='lifePoint' />
      <img src={Heart} className='lifePoint' />
      <img src={Heart} className='lifePoint' />
      <img src={Heart} className='lifePoint' />
    </div>
  )
}

export default GameHeaderHudHealth
