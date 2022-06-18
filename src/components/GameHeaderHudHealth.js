import { useState, useEffect } from 'react'

import Heart from '../assets/img/ui/hud/heart.svg'
import BrokenHeart from '../assets/img/ui/hud/broken-heart.svg'

const GameHeaderHudHealth = ({ hero }) => {
  const [life, setLife] = useState([hero.heal])

  useEffect(() => {
    const result = []
    for (let i = 0; i < 5; i++) {
      if (i < hero.heal) {
        result.push(Heart)
      } else {
        result.push(BrokenHeart)
      }
    }
    setLife(result)
  }, [hero])

  return (
    <div className='gameHeaderHudHealth'>
      {life.map((lifePoint, index) => (
        <img src={lifePoint} key={index} />
      ))}
    </div>
  )
}

export default GameHeaderHudHealth
