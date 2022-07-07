import React, { useState, useEffect } from 'react'
import Dice from './Dice'

const GameStoryBattleDice = ({
  hero,
  setHero,
  setPage,
  setShowButton,
  showButton
}) => {
  const [result, setResult] = useState({
    dice: null,
    rolling: false
  })
  useEffect(() => {
    const winOrDie = () => {
      if (hero.heal > 1) {
        // let heroData = hero
        let heart = hero.heal
        if (result.dice == 1) {
          heart -= 2
          console.log('-2')
        } else if (result.dice < 5) {
          heart -= 1
          console.log('-1')
        } else {
          setShowButton(true)
          console.log('true button')
        }
        setHero({ ...hero, heal: heart })
      } else {
        setPage(1001)
      }
    }

    result.dice && winOrDie()
  }, [result])

  const { dice, rolling } = result

  const roll = () => {
    const newDice = Math.floor(Math.random() * 6) + 1

    setResult({
      dice: newDice,
      rolling: true
    })

    setTimeout(() => setResult({ dice: newDice, rolling: false }), 2000)
  }
  return (
<<<<<<< HEAD
    <div className='rollDice'>
      <Dice face={dice} rolling={rolling} />
      <button onClick={() => !showButton && roll()} disabled={rolling}>
        {rolling ? 'En cours...' : 'Attaquer'}
      </button>
=======
    <div>
      <div className='rollDice'>
        {/* <h1> Lance le dé pour attaquer ! </h1> */}
        <div className='rollDice-container'>
          <Dice face={dice} rolling={rolling} />
        </div>
        <button onClick={roll} disabled={rolling}>
          {rolling ? 'En cours...' : 'Attaquer'}
        </button>
      </div>
>>>>>>> dev
    </div>
  )
}

export default GameStoryBattleDice
