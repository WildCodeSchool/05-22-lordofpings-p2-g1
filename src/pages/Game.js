<<<<<<< HEAD
import { React, useState } from 'react'
import GameTavern from '../components/GameTavern'
// import tavernImg from '../assets/img/background/tavern.svg'

const Game = () => {
  const [page, setPage] = useState(-2) // ID de la page en cours (Sommaire au dessous)
  // 0+ = Game
  // -1 = Other to Game
  // -2 = Tavern
  // -3 = Game Over
  // -4 = Game Won
  // -5 = Game Launch [Setup]
  const [quest, setQuest] = useState(0) // ID de la quête en cours
  const [bg, setBg] = useState(0) // ID de la quête en cours
  page >= 0 && setQuest(page)
  page === -1 && setPage(quest)

  useState(() => {
    if (page >= 0) {
      setBg()
    } else if (page === -1) {
      // setBg(tavernImg)
    } else if (page === -2) {
      // setBg(tavernImg)
=======
import { React, useState, useEffect } from 'react'
import GameOver from '../components/GameOver'
import GameStory from '../components/GameStory'
import GameStoryBattle from '../components/GameStoryBattle'
import GameTavern from '../components/GameTavern'
import tavernImg from '../assets/img/background/tavern.svg'
import quests from '../assets/json/frame.json'

const Game = () => {
  const [page, setPage] = useState(0) // ID de la page en cours (Sommaire au dessous)
  // 0+ = Game Story
  // -1 = Game Launch [Setup]// ID de la quête en cours
  // -2 = Game Tavern
  // -3 = Game Over
  // -4 = Game Won
  // -5 = Game [Other]
  const [quest, setQuest] = useState(quests[page])
  const [bg, setBg] = useState(0)

  useEffect(() => {
    page >= 0 && setQuest(quests[page])
    page === -1 && setPage(quest)
    if (page >= 0) {
      setBg(quests[quest]?.image)
    } else if (page === -2) {
      setBg(tavernImg)
>>>>>>> dev
    } else if (page === -3) {
      setBg()
    } else if (page === -4) {
      setBg()
<<<<<<< HEAD
=======
    } else if (page === -5) {
      setBg()
    } else {
      setBg()
>>>>>>> dev
    }
  }, [page])

  return (
<<<<<<< HEAD
    <div className='game' style={{ backgroundImage: `url(${bg})` }}>
      {/* <Header /> */}
      {/* {page === -2 && <GameTavern />} */}
      {/* page >= 0 && <GameStory quest={quest} /> */}
=======
    <div className='game' style={{ backgroundImage: bg && `url(${bg})` }}>
      {page >= 0 && <GameStory quest={quest} setPage={setPage} />}
      {page === -2 && <GameTavern />}
      {page === -3 && <GameOver />}
      {page === -4 && <></>}
      {page === -5 && <GameStoryBattle />}

>>>>>>> dev
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
