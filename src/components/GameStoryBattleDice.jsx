import React, { useState, useEffect } from 'react'
import Dice from './Dice'

const GameStoryBattleDice = ({ hero, setHero, setPage, setShowButton }) => {
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
        } else if (result.dice < 4) {
          heart -= 1
        } else {
          setShowButton(true)
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
      rolling: false
    })
  }

  return (
    <div>
      <div className='rollDice'>
        {/* <h1> Lance le dé pour attaquer ! </h1> */}
        <div className='rollDice-container'>
          <Dice face={result.dice} rolling={rolling} />
        </div>
        <button onClick={roll} disabled={rolling}>
          {rolling ? 'En cours...' : 'Attaquer'}
        </button>
      </div>
    </div>
  )
}

export default GameStoryBattleDice
