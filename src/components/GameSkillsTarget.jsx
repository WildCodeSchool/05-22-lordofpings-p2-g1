import React, { useEffect, useState } from 'react'

const GameSkillsTarget = ({ setGame }) => {
  const [targetTop, setTargetTop] = useState(0)
  const [targetLeft, setTargetLeft] = useState(0)
  const [targetToggle, setTargetToggle] = useState(false)

  useEffect(() => {
    targetGame()
  }, [])

  const targetGame = () => {
    const timeout = setTimeout(() => {
      setTargetTop(Math.floor(Math.random() * 90) + 1)
      setTargetLeft(Math.floor(Math.random() * 90) + 1)
      targetGame()
    }, 2000)

    if (targetToggle) {
      console.log('win', targetToggle)
    } else {
      console.log('loose', targetToggle)
      setTargetToggle(true)
    }
    return () => clearTimeout(timeout)
  }
  return (
    <>
      <div className='header' onClick={() => setGame(0)}></div>
      <div className='targetGame'>
        {targetToggle && (
          <div
            className='target'
            style={{ top: `${targetTop}%`, left: `${targetLeft}%` }}
            onClick={() => targetGame()}
          ></div>
        )}
      </div>
    </>
  )
}

export default GameSkillsTarget
