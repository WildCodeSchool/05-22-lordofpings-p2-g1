import { useState } from 'react'

// import Items from '../assets/json/items.json'

import backpack from '../assets/img/ui/hud/backpack.svg'
import inventoryParchmentRight from '../assets/img/ui/right.svg'

const GameHeaderHudInventory = ({ hero }) => {
  const [inventoryState, setInventoryState] = useState(false)

  // const displayInventory = () => {
  //   const content = hero.inventory.weapons.axe - 1
  //   console.log(Items)
  //   console.log(Items[1][1][content].image)
  //   const contentImg = Items[1][1].find(el => el === content)
  //   console.log(contentImg)
  // }

  const handleInventoryClick = () => {
    setInventoryState(!inventoryState)
    // displayInventory()
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
