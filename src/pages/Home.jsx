import { useNavigate } from 'react-router-dom'
import logoMerlin from '../assets/img/logo_merlin.jpg'
import BigButton from '../components/BigButton'

function Home() {
  const item = localStorage.getItem('hero')
  const navigate = useNavigate()
  console.log(item)

  return (
    <div className='home'>
      <div className='blockStart'>
        <img className='logo' src={logoMerlin} draggable={false} />
        <div className='title'>
          <h1>Le Déclin</h1>
          <h2>des</h2>
          <h3>Âmes</h3>
        </div>
        <BigButton
          text='JOUER'
          height='100'
          onclick={() => (item ? navigate('../game') : navigate('../concept'))}
        />
      </div>
    </div>
  )
}
export default Home
