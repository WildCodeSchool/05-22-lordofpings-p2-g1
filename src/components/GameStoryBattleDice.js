import React, { useState } from 'react'
import Dice from './Dice'

const GameStoryBattleDice = () => {
  const [state, setState] = useState({
    dice1: 1,
    rolling: false
  })

  const { dice1, rolling } = state

  const roll = () => {
    const newDice = Math.floor(Math.random() * 6) + 1
    setState({
      dice1: newDice,
      rolling: true
    })

    setTimeout(() => {
      setState(prevState => ({ ...prevState, rolling: false }))
    }, 1000)
  }

  return (
    <div>
      <div className='rollDice'>
        <h1> Lance le dé pour attaquer ! </h1>
        <div className='rollDice-container'>
          <Dice face={String(dice1)} rolling={rolling} />
        </div>
        <button onClick={roll} disabled={rolling}>
          {rolling ? 'En cours...' : 'Lancez'}
        </button>
      </div>
    </div>
  )
}

export default GameStoryBattleDice
