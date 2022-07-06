import { useNavigate, Link } from 'react-router-dom'
import logoMerlin from '../assets/img/logo_merlin.jpg'
import BigButton from '../components/BigButton'
import MainBackground from '../components/MainBackground'
import letterBoard from '../assets/img/ui/hud/letterBoard.svg'

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
            <h1>Le Déclin</h1>
            <h1>des</h1>
            <h1>Âmes</h1>
          </div>
          <BigButton
            text='JOUER'
            height='100'
            onclick={() =>
              item ? navigate('../game') : navigate('../concept')
            }
          />
          <Link className='contactButton ' to='/contact'>
            <img src={letterBoard} alt='Contact Button' />
          </Link>
        </div>
      </div>
      <MainBackground />
    </>
  )
}
export default Home
