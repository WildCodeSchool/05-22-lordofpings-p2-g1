import { useEffect, useState } from 'react'
import BigButton from './BigButton'
import Items from '../assets/json/items.json'

const GameTavernShop = ({ setMenu }) => {
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
    <div className='gameTavernShop'>
      <div className='gameTavernShopArticles'>
        {articles.map((article, index) => (
          <div key={index} className={`gameTavernShopBox bg-${index}`}>
            <h1>{article.name}</h1>
            <img src={article.image} alt={article.name} draggable={false} />
            <span>{article.shop.buyPrice}</span>
          </div>
        ))}
      </div>
      <div onClick={() => setMenu(0)}>
        <BigButton text='Retour' height='50' />
      </div>
    </div>
  )
}

export default GameTavernShop
