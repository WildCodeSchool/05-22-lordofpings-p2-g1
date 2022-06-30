import { useState } from 'react'

import backpack from '../assets/img/ui/hud/backpack.svg'
import inventoryParchmentRight from '../assets/img/ui/right.svg'

const GameHeaderHudInventory = ({ hero }) => {
  const [inventoryState, setInventoryState] = useState(false)

  const handleInventoryClick = () => {
    setInventoryState(!inventoryState)
  }

  return (
    <div className='gameHeaderHudInventory'>
      <div className='backpack'>
        <img
          src={backpack}
          alt='backpack'
          draggable={false}
          onClick={handleInventoryClick}
        />
      </div>
      <div
        className={inventoryState ? 'backpackContent' : 'backpackClose'}
      ></div>
      {inventoryState ? (
        <img
          src={inventoryParchmentRight}
          className='inventoryParchmentRight'
          draggable={false}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default GameHeaderHudInventory
