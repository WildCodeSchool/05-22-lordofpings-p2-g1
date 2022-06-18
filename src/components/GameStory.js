import Parchment from './GameStoryParchment'
import Buttons from './GameStoryButtons'
import GameHeader from './GameHeader'
import { useEffect, useState } from 'react'

const GameStory = ({ quest, setPage }) => {
  const [animation, setAnimation] = useState(true)

  useEffect(() => {
    setAnimation(true)
  }, [quest])

  useEffect(() => {
    setTimeout(() => setAnimation(false), 4000)
  }, [animation])
  return (
    <>
      <GameHeader />
      <div className='gameStory'>
        <Parchment quest={quest} animation={animation.toString()} />
        <Buttons quest={quest} setPage={setPage} animation={animation} />
      </div>
    </>
  )
}

export default GameStory
