import Parchment from './GameStoryParchment'
import Buttons from './GameStoryButtons'
import GameHeader from './GameHeader'

const GameStory = ({ quest, setPage }) => {
  return (
    <div className='gameStory'>
      <GameHeader />
      <Parchment quest={quest} />
      <Buttons quest={quest} setPage={setPage} />
    </div>
  )
}

export default GameStory
