import page404 from '../assets/css/pages/_pages404.scss'

function Page404() {
  const pages404 = [
    {
      id: 0,
      title: '404',
      text: 'Pas de page ici ...',
      text1: 'Tiens, un poulet !',
      image: 'assets/img/404/unepoule.png'
    },
    {
      id: 1,
      title: '404',
      text: 'Page non trouvée...',
      text1: 'Voici DEUX poulets !',
      image: 'assets/img/404/deuxpoules.png'
    },
    {
      id: 2,
      title: '404',
      text: 'Page non trouvée...',
      text1: 'Mais beeeeeee !',
      image: 'assets/img/404/beeeee.png'
    },
    {
      id: 3,
      title: '404',
      text: 'Pas de page...',
      text1: 'Mais un chat au sauna !',
      image: 'assets/img/404/chatsauna.png'
    },
    {
      id: 4,
      title: '404',
      text: 'Page non trouvée...',
      text1: 'Voici un chaton!',
      image: 'assets/img/404/chaton.png'
    }
  ]

  let a = Math.floor(Math.random() * pages404.length)

  return (
    <div className='page404-container-global'>
      <div id='404' className='page404-container'>
        <div className='leftSide'>
          <h1 className='title'>{pages404[a].title}</h1>
          <hr className='line'></hr>
          <h2 className='text'>{pages404[a].text}</h2>
          <h2 className='text'>{pages404[a].text1}</h2>
        </div>
        <div className='rightSide'>
          <img className='Images404' src={pages404[a].image} alt='404 images' />
        </div>
      </div>
    </div>
  )
}
export default Page404
