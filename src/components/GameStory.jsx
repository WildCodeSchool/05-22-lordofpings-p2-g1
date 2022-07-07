import Parchment from './GameStoryParchment'
import Buttons from './GameStoryButtons'
import GameHeader from './GameHeader'
import GameStoryBattle from './GameStoryBattle'
import { useState } from 'react'
import { useEffect } from 'react'
import items from '../assets/json/items.json'

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

  // useEffect(() => {
  //   setShowButton(!quest.battle)
  //   if (quest?.item) {
  //     setHero({
  //       ...hero,
  //       inventory: [...hero.inventory, items[1][quest.item + 1]]
  //     })
  //   }
  // }, [quest])

  console.log(hero)

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
        <Parchment
          quest={quest}
          animation={animation}
          setAnimation={setAnimation}
        />

        {showButton && (
          <Buttons
            hero={hero}
            quest={quest}
            setPage={animation === false && setPage}
            animation={animation}
          />
        )}

        {quest?.battle && (
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
