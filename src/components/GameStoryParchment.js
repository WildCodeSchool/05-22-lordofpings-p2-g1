import rouleaugauche from '../assets/img/left.svg'
import rouleaudroite from '../assets/img/right.svg'

const GameParchment = ({ quest }) => {
  return (
    <div className='box'>
      <img src={rouleaugauche} className='left-rouleau'></img>
      <div className='text'>
        <p>{quest.text}</p>
      </div>
      <img src={rouleaudroite} className='right-rouleau'></img>
    </div>
  )
}

export default GameParchment
