import { useNavigate } from 'react-router-dom'
import logoMerlin from '../assets/img/logo_merlin.jpg'
import BigButton from '../components/BigButton'
import MainBackground from '../components/MainBackground'

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
            <h2>des</h2>
            <h3>Âmes</h3>
          </div>
          <BigButton
            text='JOUER'
            height='100'
            onclick={() =>
              item ? navigate('../game') : navigate('../concept')
            }
          />
        </div>
        <BigButton text='JOUER' height='100' />
        onclick={() => (item ? navigate('../game') : navigate('../create'))}
      </div>
      <MainBackground />
    </>
  )
}
export default Home
