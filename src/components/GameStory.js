import { useEffect, useState } from 'react'
import Parchment from './GameStoryParchment'
import quests from '../assets/json/frame.json'
import Buttons from './GameStoryButtons'
const GameStory = () => {
  const [page, setPage] = useState(0)
  const [quest, setQuest] = useState(quests[page])
  useEffect(() => {
    page >= 0 && setQuest(quests[page])
  }, [page])

  return (
    <div className='storyQuest'>
      <Parchment quest={quest} />
      <Buttons quest={quest} setPage={setPage} />
    </div>
  )
}

export default GameStory
