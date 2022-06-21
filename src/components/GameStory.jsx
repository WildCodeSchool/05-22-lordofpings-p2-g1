import Parchment from './GameStoryParchment'
import Buttons from './GameStoryButtons'
import GameHeader from './GameHeader'
import { useEffect, useState } from 'react'

const GameStory = ({ quest, setPage, hero }) => {
  const [animation, setAnimation] = useState(true)

  useEffect(() => {
    setAnimation(true)
  }, [quest])

  useEffect(() => {
    animation && setTimeout(() => setAnimation(false), 4000)
  }, [animation])
  return (
    <>
      <GameHeader hero={hero} />
      <div className='gameStory'>
        <Parchment quest={quest} animation={animation.toString()} />
        <Buttons
          quest={quest}
          setPage={animation === false && setPage}
          animation={animation}
        />
      </div>
    </>
  )
}

export default GameStory
