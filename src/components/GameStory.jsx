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

  useEffect(() => {
    setShowButton(!quest?.battle)
    if (quest?.item && !hero.inventory.items.includes(quest.item)) {
      setHero({
        ...hero,
        inventory: {
          ...hero.inventory,
          items: [...hero.inventory.items, items[1][quest.item - 1]?.id]
        }
      })
    }
    if (!localStorage.getItem(quest._id)) {
      if (quest?.money !== undefined) {
        localStorage.setItem(quest._id, true)

        if (quest.money === 0) {
          setHero({
            ...hero,
            money: 0
          })
        } else {
          setHero({
            ...hero,
            money: hero.money + quest.money
          })
        }
      }
      if (quest?.heal !== undefined) {
        localStorage.setItem(quest._id, true)

        if (hero.heal + quest.heal > 0) {
          setHero({
            ...hero,
            heal: hero.heal - quest.heal
          })
        } else {
          setPage(1001)
        }
      }
    }
  }, [quest])

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
              hero={hero}
              quest={quest}
              setPage={animation === false && setPage}
              animation={animation}
            />
          )}
        </div>

        {quest?.battle && (
          <GameStoryBattle
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
