import { useEffect, useState } from 'react'
import BigButton from './BigButton'
import Items from '../assets/json/items.json'

const GameTavernShop = ({ setMenu, hero, setHero }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let result = []
    for (let i = 0; i < 3; i++) {
      const random = arr => Math.floor(Math.random() * arr.length)
      const c = hero.class === 'knight' ? 0 : 1 // class of hero
      result.push(Items[0][c][random(Items[0][c])])
    }
    setArticles(result)
  }, [])

  const buyItem = article => {
    if (
      hero.money >= article.shop.buyPrice &&
      !hero.inventory.map(obj => obj.id).includes(article.id)
    ) {
      setHero({
        ...hero,
        money: hero.money - article.shop.buyPrice,
        inventory: [...hero.inventory[0], article]
      })
      setMenu(0)
    }
  }

  return (
    <div className='gameTavernShop'>
      <div className='gameTavernShopArticles'>
        {articles.map((article, index) => (
          <div key={index} className={`gameTavernShopBox bg-${index}`}>
            <h1>{article.name}</h1>
            <img src={article.image} alt={article.name} draggable={false} />
            {/* {console.log(article.image)} */}
            <a onClick={() => buyItem(article)}>{article.shop.buyPrice}</a>
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
