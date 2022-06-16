import Purse from '../assets/img/ui/hud/purse.svg'
import { useState, useEffect } from 'react'

const GameHeaderHudGold = ({ hero }) => {
  return (
    <div className='gameHeaderHudGold'>
      <img src={Purse} className='purse' />
      <p className='goldAmount'>{hero.money}</p>
    </div>
  )
}

export default GameHeaderHudGold
