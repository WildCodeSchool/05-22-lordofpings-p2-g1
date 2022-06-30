import { useState, useEffect } from 'react'

import heart from '../assets/img/ui/hud/heart.svg'
import brokenHeart from '../assets/img/ui/hud/broken-heart.svg'

const GameHeaderHudHealth = ({ hero }) => {
  const [life, setLife] = useState([hero?.heal])
  // console.log('hudhealth', hero)
  useEffect(() => {
    // console.log('hero', hero)
    const result = []
    for (let i = 0; i < hero?.maxHeal; i++) {
      if (i < hero.heal) {
        result.push(heart)
      } else {
        result.push(brokenHeart)
      }
    }
    setLife(result)
  }, [hero])

  return (
    <div className='gameHeaderHudHealth'>
      {life.map((lifePoint, index) => (
        <img src={lifePoint} key={index} draggable={false} />
      ))}
    </div>
  )
}

export default GameHeaderHudHealth
