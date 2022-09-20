import React, { useState, useEffect } from 'react'
import Dice from './Dice'

const GameStoryBattle = ({
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
  const { dice, rolling } = result
  const [weapon, setWeapon] = useState(
    hero.inventory.weapons.reduce((weap1, weap2) =>
      weap1 > weap2 ? weap1 : weap2
    )
  )

  useEffect(() => {
    const winOrDie = () => {
      if (rolling) {
        if (hero.heal > 1) {
          let heart = hero.heal
          if (result.dice == 1) {
            heart -= weapon == 7 ? 1 : 2
          } else if (result.dice < (weapon == 2 ? 4 : 5)) {
            heart -= 1
          } else {
            setShowButton(true)
          }
          setHero({ ...hero, heal: heart })
        } else {
          setPage(1001)
        }
      }
    }

    result.dice && winOrDie()
  }, [result])

  const roll = () => {
    let newDice = Math.floor(Math.random() * 6) + 1
    if (weapon == 3) {
      newDice = Math.floor(Math.random() * 8) + 1
      newDice > 6 && (newDice = 6)
    }
    if (weapon == 7) {
      newDice = Math.floor(Math.random() * 10) + 1
      newDice > 6 && (newDice = 6)
    }
    setResult({
      dice: newDice,
      rolling: true
    })

    setTimeout(() => setResult({ dice: newDice, rolling: false }), 2000)
  }
  return (
    <div className='rollDice'>
      <Dice face={dice} rolling={rolling} />
      <button onClick={() => !showButton && roll()} disabled={rolling}>
        {rolling ? 'En cours...' : 'Attaquer'}
      </button>
    </div>
  )
}

export default GameStoryBattle
