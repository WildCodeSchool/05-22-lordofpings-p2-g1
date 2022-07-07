import Parchment from './GameStoryParchment'
import Buttons from './GameStoryButtons'
import GameHeader from './GameHeader'
import GameStoryBattleDice from './GameStoryBattleDice'
import { useState } from 'react'
import { useEffect } from 'react'

const GameStory = ({
  quest,
  setPage,
  hero,
  setHero,
  music,
  isPlayedYolo,
  volume,
  setVolume
}) => {
  const [animation, setAnimation] = useState(true)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => setShowButton(!quest.battle), [quest])
  return (
    <>
      <GameHeader
        hero={hero}
        music={music}
        isPlayedYolo={isPlayedYolo}
        volume={volume}
        setVolume={setVolume}
      />
      <div className='gameStory'>
        <div className='gameStoryBlock'>
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
        </div>
        {quest?.battle && (
          <GameStoryBattleDice
            hero={hero}
            setHero={setHero}
            setPage={setPage}
            quest={quest}
            showButton={showButton}
            setShowButton={setShowButton}
          />
        )}
      </div>
    </>
  )
}

export default GameStory
