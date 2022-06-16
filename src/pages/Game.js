import { React, useState, useEffect } from 'react'
import GameTavern from '../components/GameTavern'
import tavernImg from '../assets/img/background/tavern.svg'
// import quests from '../assets/json/frame.json'

const Game = () => {
  const [page, setPage] = useState(-2) // ID de la page en cours (Sommaire au dessous)
  // 0+ = Game Story
  // -1 = Game [Other]
  // -2 = Game Tavern
  // -3 = Game Over
  // -4 = Game Won
  // -5 = Game Launch [Setup]// ID de la quête en cours
  // const [quest, setQuest] = useState(quests[page])
  const [bg, setBg] = useState(0)

  useEffect(() => {
    // page >= 0 && setQuest(quests[page])
    // page === -1 && setPage(quest)
    if (page >= 0) {
      // setBg(quests[quest].image)
    } else if (page === -1) {
      setBg()
    } else if (page === -2) {
      setBg(tavernImg)
    } else if (page === -3) {
      setBg()
    } else if (page === -4) {
      setBg()
    } else {
      setBg()
    }
  }, [page])

  return (
    <div className='game' style={{ backgroundImage: `url(${bg})` }}>
      {/* <Header /> */}
      {page === -2 && <GameTavern />}
      {/* page >= 0 && <GameStory quest={quest} setPage={setPage} /> */}
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
