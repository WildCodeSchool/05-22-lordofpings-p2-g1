import { React, useState, useEffect } from 'react'
import GameOver from '../components/GameOver'
import GameStory from '../components/GameStory'
import GameStoryBattle from '../components/GameStoryBattle'
import GameTavern from '../components/GameTavern'
import tavernImg from '../assets/img/background/tavern.svg'
import quests from '../assets/json/frame.json'

const Game = () => {
  const [page, setPage] = useState(-3) // ID de la page en cours (Sommaire au dessous)
  // 0+ = Game Story
  // -1 = Game Launch [Setup]// ID de la quête en cours
  // -2 = Game Tavern
  // -3 = Game Over
  // -4 = Game Won
  // -5 = Game [Other]
  const [quest, setQuest] = useState(quests[page])
  const [bg, setBg] = useState(0)
  const [hero, setHero] = useState(JSON.parse(localStorage.getItem('hero')))

  const setHeroData = data => {
    setHero(data)
    localStorage.setItem('hero', JSON.stringify(data))
  }

  useEffect(() => {
    page >= 0 && setQuest(quests[page])
    page === -1 && setPage(quest)
    if (page >= 0) {
      setBg(quests[quest]?.image)
    } else if (page === -2) {
      setBg(tavernImg)
    } else if (page === -4) {
      setBg()
    } else if (page === -5) {
      setBg()
    } else {
      setBg()
    }
  }, [page])

  return (
    <div className='game' style={{ backgroundImage: bg && `url(${bg})` }}>
      {page >= 0 && (
        <GameStory
          quest={quest}
          setPage={setPage}
          hero={hero}
          setHero={setHeroData}
        />
      )}
      {page === -2 && <GameTavern hero={hero} setHero={setHeroData} />}
      {page === -3 && <GameOver hero={hero} setHero={setHeroData} />}
      {page === -4 && <></>}
      {page === -5 && <GameStoryBattle />}

      <div>
        <a
          style={{ margin: 0, textAlign: 'center', lineHeight: '40px' }}
          href={'https://fr.freepik.com'}
        >
          Illustré par upklyak - fr.freepik.com
        </a>
      </div>
    </div>
  )
}

export default Game
