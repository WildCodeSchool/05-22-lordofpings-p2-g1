import Archer from '../assets/img/heroes/archer.png'
import Knight from '../assets/img/heroes/knight.png'

const GameHeaderHudPortrait = ({ hero }) => {
  return (
    <div className='gameHeaderHudPortrait'>
      <img
        src={hero?.class === 'archer' ? Archer : Knight}
        className='portrait'
        draggable={false}
      />
    </div>
  )
}

export default GameHeaderHudPortrait
