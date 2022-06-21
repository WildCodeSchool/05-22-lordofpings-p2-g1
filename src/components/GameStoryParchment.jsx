import parchmentLeft from '../assets/img/ui/left.svg'
import parchmentRight from '../assets/img/ui/right.svg'

const GameStoryParchment = ({ quest, animation }) => {
  return (
    <div className='gameStoryParchment'>
      <img src={parchmentLeft} className='parchmentLeft'></img>
      <div className='text' animation={animation && animation.toString()}>
        <p>{quest?.text}</p>
      </div>
      <img src={parchmentRight} className='parchmentRight'></img>
    </div>
  )
}

export default GameStoryParchment
