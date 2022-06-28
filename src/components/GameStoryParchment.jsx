import { useEffect } from 'react'
import parchmentLeft from '../assets/img/ui/left.svg'
import parchmentRight from '../assets/img/ui/right.svg'

const GameStoryParchment = ({ quest, animation, setAnimation }) => {
  useEffect(() => {
    setAnimation(true)
  }, [quest])
  useEffect(() => {
    animation && setTimeout(() => setAnimation(false), 4000)
  }, [animation])
  return (
    <div className='gameStoryParchment'>
      <img src={parchmentLeft} className='parchmentLeft' draggable={false} />
      <div className='text' animation={animation.toString()}>
        <p>{quest?.text}</p>
      </div>
      <img src={parchmentRight} className='parchmentRight' draggable={false} />
    </div>
  )
}

export default GameStoryParchment
