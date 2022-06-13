import { React, useState } from 'react'
import GameTavern from '../components/GameTavern'

const Game = () => {
  // 0+ = Game
  // -1 = Other to Game
  // -2 = Tavern
  // -3 = Game Over
  // -4 = Game Won
  // -5 = Game Launch [Setup]
  const [quest, setQuest] = useState(0)
  const [page, setPage] = useState(-2)
  page >= 0 && setQuest(page)
  page === -1 && setPage(quest)

  return (
    <div className='game'>
      {/* <Header /> */}
      {page === -2 && <GameTavern />}
      {/* page >= 0 && <GameStory quest={quest} /> */}
    </div>
  )
}

export default Game
