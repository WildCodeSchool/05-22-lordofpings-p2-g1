import { useState } from 'react'
import GameHeader from './GameHeader'
import GameSkillsTarget from './GameSkillsTarget'

const GameSkills = ({ hero }) => {
  const [game, setGame] = useState(0)

  return (
    <div className='gameSkills'>
      <GameHeader hero={hero} />
      {game === 0 && <div className='gladiator' onClick={() => setGame(1)} />}
      {game === 1 && <GameSkillsTarget game={game} setGame={setGame} />}
    </div>
  )
}

export default GameSkills
