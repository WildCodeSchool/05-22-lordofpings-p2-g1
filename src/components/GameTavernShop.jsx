import { useEffect, useState } from 'react'
import BigButton from './BigButton'
import Items from '../assets/json/items.json'

const GameTavernShop = ({ setMenu }) => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    let result = []
    for (let i = 0; i < 3; i++) {
      const random = arr => Math.floor(Math.random() * arr.length)
      const type = 0
      const a = random(Items)
      const b = random(Items[a])
      result.push(a === 0 ? Items[a][b][type][i] : Items[1][type][i])
    }
    setArticles(result)
  }, [])

  return (
    <div className='gameTavernShop'>
      <div className='gameTavernShopArticles'>
        {articles.map((article, index) => (
          <div key={index} className={`gameTavernShopBox bg-${index}`}>
            <h1>{article.name}</h1>
            {console.log('../assets/img/items/weapons/sword1.svg')}
            {/* <img src={require(article.image).default} alt={article.name} /> */}
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
