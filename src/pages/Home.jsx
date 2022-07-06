import { useNavigate } from 'react-router-dom'
import logoMerlin from '../assets/img/logo_merlin.jpg'
import BigButton from '../components/BigButton'
import MainBackground from '../components/MainBackground'
// import letterBoard from '../assets/img/ui/hud/letterBoard.svg'

function Home() {
  const item = localStorage.getItem('hero')
  const navigate = useNavigate()

  return (
    <>
      <div className='home'>
        <div className='blockStart'>
          <div className='halogo'>
            <img className='logo' src={logoMerlin} draggable={false} />
            <div id='halo'></div>
          </div>
          <div className='title'>
            <h1>
              Le Déclin <br />
              des <br />
              Âmes
            </h1>
          </div>
          <BigButton
            text='JOUER'
            height='100'
            onclick={() =>
              item ? navigate('../game') : navigate('../concept')
            }
          />
        </div>
        {/* <div className='contactButton'>
          <Link to='/contact'>
            <img
              className='contactImage'
              src={letterBoard}
              alt='Contact Button'
            />
          </Link>
        </div> */}
      </div>
      <MainBackground />
    </>
  )
}
export default Home
