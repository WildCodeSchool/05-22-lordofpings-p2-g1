import Parchment from './GameStoryParchment'
import Buttons from './GameStoryButtons'
import GameHeader from './GameHeader'
import { useState } from 'react'

const GameStory = ({ quest, setPage, hero }) => {
  const [animation, setAnimation] = useState(true)

  return (
    <>
      <GameHeader hero={hero} />
      <div className='gameStory'>
        <Parchment
          quest={quest}
          animation={animation}
          setAnimation={setAnimation}
        />
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
