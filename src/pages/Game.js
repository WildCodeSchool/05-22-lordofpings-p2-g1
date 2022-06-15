import { React, useState } from 'react'
import GameTavern from '../components/GameTavern'
import tavernImg from '../assets/img/background/tavern.svg'

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
      setBg(tavernImg)
    } else if (page === -2) {
      setBg(tavernImg)
    } else if (page === -3) {
      setBg()
    } else if (page === -4) {
      setBg()
    }
  }, [page])

  return (
    <div className='game' style={{ backgroundImage: `url(${bg})` }}>
      {/* <Header /> */}
      {page === -2 && <GameTavern />}
      {/* page >= 0 && <GameStory quest={quest} /> */}
    </div>
  )
}

export default Game
