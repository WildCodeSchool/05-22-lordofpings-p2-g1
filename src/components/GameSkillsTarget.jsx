import React, { useEffect, useState } from 'react'

const GameSkillsTarget = ({ setGame }) => {
  const [targetTop, setTargetTop] = useState(0)
  const [targetLeft, setTargetLeft] = useState(0)
  const [targetToggle, setTargetToggle] = useState(true)
  const [targetSpeed, setTargetSpeed] = useState(2000)
  const [targetScore, setTargetScore] = useState(0)
  const [targetCount, setTargetCount] = useState(0)

  const clicked = () => {
    setTargetToggle(false)
    setTargetScore(targetScore + 1)
  }
  useEffect(() => {
    setTargetCount(targetCount + 1)
    let interval = setInterval(() => {
      setTargetTop(Math.floor(Math.random() * 90) + 1)
      setTargetLeft(Math.floor(Math.random() * 90) + 1)
      setTargetToggle(true)

      setTimeout(() => {
        if (targetToggle && targetScore > 0) {
          setTargetScore(targetScore - 1)
        } else {
          if (targetSpeed == 100) {
            setTargetScore(targetScore - 1)
            setTargetToggle(false)
            clearInterval(interval)
          } else {
            setTargetScore(targetScore + 1)
            targetSpeed > 100 && setTargetSpeed(targetSpeed - 100)
          }
        }
      }, targetSpeed)
    }, targetSpeed)

    return () => clearInterval(interval)
  }, [targetScore])

  return (
    <>
      <h1>Score: {targetScore}</h1>
      <div className='targetGame'>
        {targetToggle && (
          <div
            className='target'
            style={{ top: `${targetTop}%`, left: `${targetLeft}%` }}
            onClick={() => clicked()}
          ></div>
        )}
      </div>
      <div className='header' onClick={() => setGame(0)}></div>
    </>
  )
}

export default GameSkillsTarget
