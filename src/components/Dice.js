import React from 'react'

const Dice = ({ face, rolling }) => {
  return <div className={`dice-${face} ${rolling && 'shaking'}`}></div>
}
export default Dice
