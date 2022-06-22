import { useEffect, useState } from 'react'
import GameHeader from './GameHeader'
import GameTavernShop from './GameTavernShop'
import Items from '../assets/json/items.json'

const GameTavern = ({ hero }) => {
  // 0 = No menu
  // 1 = Quest
  // 2 = Shop
  // 3 = Mini Games
  const [menu, setMenu] = useState(0)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let result = []
    for (let i = 0; i < 3; i++) {
      const random = arr => Math.floor(Math.random() * arr.length)
      const c = 0 // class of hero
      const a = 1 // random(Items)
      result.push(a === 0 ? Items[0][random(Items[a])][c][i] : Items[1][c][i])
    }
    setArticles(result)
  }, [])

  return (
    <div className='gameTavern'>
      <GameHeader hero={hero} />
      <div className='target' onClick={() => setMenu(3)} />
      <div className='barman' onClick={() => setMenu(1)} />
      <div className='knife' onClick={() => setMenu(0)} />
      <div className='idiot' onClick={() => setMenu(2)} />
      {/* {menu === 1 && <GameTavernQuest /> */}
      {menu === 2 && articles.length && (
        <GameTavernShop setMenu={setMenu} articles={articles} />
      )}
    </div>
  )
}

export default GameTavern
