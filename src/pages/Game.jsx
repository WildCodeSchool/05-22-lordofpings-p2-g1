import { React, useState, useEffect } from 'react'

import GameOver from '../components/GameOver'
import GameSkills from '../components/GameSkills'
import GameStory from '../components/GameStory'
import GameStoryBattle from '../components/GameStoryBattle'
import GameTavern from '../components/GameTavern'
import GameWon from '../components/GameWon'

import forest from '../assets/img/background/forest1.svg'
import gameWonImg from '../assets/img/background/gameWon.svg'
import tavernImg from '../assets/img/background/tavern.svg'
import skillsImg from '../assets/img/background/arena.svg'

import quests from '../assets/json/frame.json'
import Contact from './Contact'

const Game = () => {
  const [page, setPage] = useState(parseInt(localStorage.getItem('page'))) // ID de la page en cours (Sommaire au dessous)
  // -1 = Game Launch [Setup]// ID de la quête en cours
  // 0+ = Game Story
  // 1000 = Game Tavern
  // 1001 = Game Over
  // 1002 = Game Won
  // 1003 = Game Skills
  // 1004 = Game [Other]
  // 1005 = Contact
  const [quest, setQuest] = useState(
    JSON.stringify(quests[localStorage.getItem('quest')])
  )
  const [bg, setBg] = useState(0)
  const [hero, setHero] = useState(JSON.parse(localStorage.getItem('hero')))

  const setHeroData = data => {
    setHero(data)
    localStorage.setItem('hero', JSON.stringify(data))
  }
  useEffect(() => {
    localStorage.setItem('page', page)
    page < 1000 &&
      page > -1 &&
      (setQuest(quests[page]), localStorage.setItem('quest', page))
    page === null && setPage(0)
    page === -1 && setPage(localStorage.getItem('quest'))
    if (page < 1000) {
      // Game Story
      if (quest?.image) {
        setBg(quest.image)
      } else {
        setBg(forest)
      }
    } else if (page === 1000) {
      // Game Tavern
      setBg(tavernImg)
    } else if (page === 1001) {
      // Game Over
      setBg(undefined)
      setQuest(undefined)
      setHero(localStorage.removeItem('hero'))
    } else if (page === 1002) {
      // Game Won
      setBg(gameWonImg)
      setQuest(undefined)
      setHero(localStorage.removeItem('hero'))
    } else if (page === 1003) {
      // Game Skills
      setBg(skillsImg)
    } else if (page === 1004) {
      // Game [Other]
      setBg()
    } else if (page === 1005) {
      // Contact
      setBg()
    } else {
      // Game Launch [Setup]
      setBg()
    }
  }, [page, quest])

  return (
    <>
      <div
        className='gameBackground'
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className='gameAdmin'>
        <b>ADMIN MENU: </b>
        <button onClick={() => setPage(localStorage.getItem('quest'))}>
          Story
        </button>
        <button onClick={() => setPage(1000)}>Tavern</button>
        <button onClick={() => setPage(1001)}>GameOver</button>
        <button onClick={() => setPage(1002)}>GameWon</button>
        <button onClick={() => setPage(1003)}>GameSkills</button>
        <button onClick={() => setPage(1004)}>GameBattle</button>
        <button onClick={() => setPage(1005)}>Contact</button>
        <input type={'number'} onChange={e => setPage(e.target.value)} />
      </div>

      <div className='game' style={{ backgroundImage: bg && `url(${bg})` }}>
        {page < 1000 && (
          <GameStory
            quest={quest}
            setPage={setPage}
            hero={hero}
            setHero={setHeroData}
          />
        )}
        {page === 1000 && (
          <GameTavern hero={hero} setHero={setHeroData} setPage={setPage} />
        )}
        {page === 1001 && <GameOver setHero={setHeroData} setPage={setPage} />}
        {page === 1002 && <GameWon setPage={setPage} />}
        {page === 1003 && <GameSkills hero={hero} setPage={setPage} />}
        {page === 1005 && <Contact />}

        <div>
          <a
            style={{ margin: 0, textAlign: 'center', lineHeight: '40px' }}
            href={'https://fr.freepik.com'}
          >
            Illustré par upklyak - fr.freepik.com
          </a>
        </div>
      </div>
    </>
  )
}

export default Game
