import { useState } from 'react'
import BigButton from './BigButton'
import GameHeader from './GameHeader'
import GameSkillsTarget from './GameSkillsTarget'

const GameSkills = ({ hero, setPage }) => {
  const [game, setGame] = useState(0)

  return (
    <div className='gameSkills'>
      <GameHeader hero={hero} />
      {game === 0 && (
        <>
          <div className='gladiator' onClick={() => setGame(1)} />

          <BigButton onclick={() => setPage(1000)} height='75' text='Retour' />
        </>
      )}
      {game === 1 && <GameSkillsTarget game={game} setGame={setGame} />}
    </div>
  )
}

export default GameSkills
