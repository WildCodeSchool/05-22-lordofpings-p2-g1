import { useState, useEffect } from 'react'
import Items from '../assets/json/items.json'

import backpack from '../assets/img/ui/hud/backpack.svg'
import inventoryParchmentRight from '../assets/img/ui/right.svg'
import potion from '../assets/img/items/potion.svg'
import salade from '../assets/img/items/salad.svg'
import carte from '../assets/img/items/businessCard.png'
import shroom from '../assets/img/items/shroom.svg'
import chiffon from '../assets/img/items/monsieurPropre.svg'
import canard from '../assets/img/items/canardApocalypse.svg'
import patator from '../assets/img/items/patator.svg'

const GameHeaderHudInventory = ({ hero }) => {
  const [inventoryState, setInventoryState] = useState(false)
  const [filteredInv, setFilteredInv] = useState('')
  const [filteredWeapons, setFilteredWeapons] = useState('')
  const [isBackpackOpen, setIsBackpackOpen] = useState(false)

  useEffect(() => {
    const inv = document.getElementById('inv')
    const itemNbr = filteredInv.length + filteredWeapons.length
    inv.style.width = itemNbr ? `${itemNbr * 50 + 5}px` : '100px'
  }, [filteredInv, filteredWeapons])

  const handleInventoryClick = () => {
    const inv = document.getElementById('inv')
    const filtered = Items[1].filter(item =>
      hero.inventory.items.includes(item.id)
    )

    const heroClass = hero.class === 'archer' ? 0 : 1

    const weaponsFiltered = Items[0][heroClass].filter(weapon =>
      hero.inventory.weapons.includes(weapon.id)
    )

    inv.classList.value === 'backpackContent'
      ? setIsBackpackOpen(false)
      : setIsBackpackOpen(true)

    setFilteredWeapons(weaponsFiltered)
    setFilteredInv(filtered)
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
        id='inv'
        className={inventoryState ? 'backpackContent' : 'backpackClose'}
      >
        {isBackpackOpen &&
          filteredInv.map(el => {
            if (el.name === 'Potion de vie') {
              return (
                <div key={el.id} className='imgContainer'>
                  <img src={potion} alt={el.name} className='invImg' />
                  <p className='itemDesc'>{el.description}</p>
                </div>
              )
            }
            if (el.name === 'Carte de visite Karvagma Inc.') {
              return (
                <div key={el.id} className='imgContainer'>
                  <img
                    key={el.id}
                    src={carte}
                    alt={el.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{el.description}</p>
                </div>
              )
            }
            if (el.name === 'Champignons') {
              return (
                <div key={el.id} className='imgContainer'>
                  <img
                    key={el.id}
                    src={shroom}
                    alt={el.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{el.description}</p>
                </div>
              )
            }
            if (el.name === 'Salade') {
              return (
                <div key={el.id} className='imgContainer'>
                  <img
                    key={el.id}
                    src={salade}
                    alt={el.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{el.description}</p>
                </div>
              )
            }
            if (el.name === 'Monsieur Propre') {
              return (
                <div key={el.id} className='imgContainer'>
                  <img
                    key={el.id}
                    src={chiffon}
                    alt={el.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{el.description}</p>
                </div>
              )
            }
            if (el.name === "Canard de l'Apocalypse") {
              return (
                <div key={el.id} className='imgContainer'>
                  <img
                    key={el.id}
                    src={canard}
                    alt={el.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{el.description}</p>
                </div>
              )
            }
            if (el.name === 'Patator') {
              return (
                <div key={el.id} className='imgContainer'>
                  <img
                    key={el.id}
                    src={patator}
                    alt={el.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{el.description}</p>
                </div>
              )
            }
          })}
        {isBackpackOpen &&
          filteredWeapons.map(weap => {
            if (weap.name === 'Hâche de débutante') {
              return (
                <div key={weap.id} className='imgContainer'>
                  <img src={weap.image} alt={weap.name} className='invImg' />{' '}
                  <p className='itemDesc'>{weap.description}</p>
                </div>
              )
            }
            if (weap.name === 'Hâche de combat') {
              return (
                <div key={weap.id} className='imgContainer'>
                  <img
                    key={weap.id}
                    src={weap.image}
                    alt={weap.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{weap.description}</p>
                </div>
              )
            }
            if (weap.name === 'Hâche de Guerrière') {
              return (
                <div key={weap.id} className='imgContainer'>
                  <img
                    key={weap.id}
                    src={weap.image}
                    alt={weap.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{weap.description}</p>
                </div>
              )
            }
            if (weap.name === 'Épée de débutante') {
              return (
                <div key={weap.id} className='imgContainer'>
                  <img
                    key={weap.id}
                    src={weap.image}
                    alt={weap.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{weap.description}</p>
                </div>
              )
            }
            if (weap.name === 'Épée de combat') {
              return (
                <div key={weap.id} className='imgContainer'>
                  <img
                    key={weap.id}
                    src={weap.image}
                    alt={weap.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{weap.description}</p>
                </div>
              )
            }
            if (weap.name === 'Épée de guerrière') {
              return (
                <div key={weap.id} className='imgContainer'>
                  <img
                    key={weap.id}
                    src={weap.image}
                    alt={weap.name}
                    className='invImg'
                  />
                  <p className='itemDesc'>{weap.description}</p>
                </div>
              )
            }
          })}
      </div>
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
