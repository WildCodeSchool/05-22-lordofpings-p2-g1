import { useEffect, useState } from 'react'
import GameHeader from './GameHeader'

const GameSkills = ({ hero }) => {
  const [game, setGame] = useState(0)
  const [targetTop, setTargetTop] = useState(0)
  const [targetLeft, setTargetLeft] = useState(0)
  const [targetToggle, setTargetToggle] = useState(true)

  useEffect(() => {
    if (game === 1) {
      const interval = setInterval(() => {
        setTargetTop(Math.floor(Math.random() * 90) + 1)
        setTargetLeft(Math.floor(Math.random() * 90) + 1)

        console.log('targetToggle', targetToggle)
        setTargetToggle(true)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [game])
  return (
    <div className='gameSkills'>
      <GameHeader hero={hero} />
      {game === 0 && <div className='gladiator' onClick={() => setGame(1)} />}
      {game === 1 && (
        <>
          <div className='header' onClick={() => setGame(0)}></div>
          <div className='targetGame'>
            {targetToggle && (
              <div
                className='target'
                style={{ top: `${targetTop}%`, left: `${targetLeft}%` }}
                onClick={() => setTargetToggle(false)}
              ></div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default GameSkills
