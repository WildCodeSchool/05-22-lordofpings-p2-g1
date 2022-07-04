import Parchment from './GameStoryParchment'
import Buttons from './GameStoryButtons'
import GameHeader from './GameHeader'
import GameStoryBattle from './GameStoryBattle'
import { useState } from 'react'
import { useEffect } from 'react'

const GameStory = ({ quest, setPage, hero, setHero }) => {
  const [animation, setAnimation] = useState(true)
  const [showButton, setShowButton] = useState(false)

  useEffect(
    () =>
      // console.log('battletamere', !quest.battle, quest) ||
      setShowButton(!quest.battle),
    [quest]
  )
  // console.log(showButton)
  return (
    <>
      <GameHeader hero={hero} />
      <div className='gameStory'>
        <Parchment
          quest={quest}
          animation={animation}
          setAnimation={setAnimation}
        />

        {showButton && (
          <Buttons
            quest={quest}
            setPage={animation === false && setPage}
            animation={animation}
          />
        )}

        {quest.battle && (
          <GameStoryBattle
            hero={hero}
            setHero={setHero}
            setPage={setPage}
            quest={quest}
            setShowButton={setShowButton}
          />
        )}
      </div>
    </>
  )
}

export default GameStory
