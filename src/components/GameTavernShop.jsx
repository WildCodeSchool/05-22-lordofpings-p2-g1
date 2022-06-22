import BigButton from './BigButton'

const GameTavernShop = ({ setMenu, articles }) => {
  return (
    <div className='gameTavernShop'>
      <div className='gameTavernShopArticles'>
        {articles.map((article, index) => {
          // let yolo = `../${article.image}`

          return (
            <div key={index} className={`gameTavernShopBox bg-${index}`}>
              <h1>{article.name}</h1>
              <img src={article.image} alt={article.name} draggable={false} />
              <span>{article.shop.buyPrice}</span>
            </div>
          )
        })}
      </div>
      <div onClick={() => setMenu(0)}>
        <BigButton text='Retour' height='50' />
      </div>
    </div>
  )
}

export default GameTavernShop
