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
    if (hero.inventory.weapons.map(obj => obj).includes(article.id))
      window.alert('Vous possédez déjà cet objet !')
    else if (
      hero.money >= article.shop.buyPrice &&
      !hero.inventory.weapons.map(obj => obj.id).includes(article.id)
    ) {
      setHero({
        ...hero,
        money: hero.money - article.shop.buyPrice,
        weapons: [...hero.inventory.weapons, article.id]
      })
      setMenu(0)
    } else {
      window.alert("Vous n'avez pas assez d'argent !")
    }
  }

  return (
    <div className='gameTavernShop'>
      <div className='gameTavernShopArticles'>
        {articles.map((article, index) => (
          <div key={index} className={`gameTavernShopBox bg-${index}`}>
            <h1>{article.name}</h1>
            <img src={article.image} alt={article.name} draggable={false} />
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
