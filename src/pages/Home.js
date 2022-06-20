import { Link } from 'react-router-dom'
import logoMerlin from '../assets/img/logo_merlin.jpg'
import BigButton from '../components/BigButton'

function Home() {
  return (
    <div className='home'>
      <div className='blockStart'>
        <img className='logo' src={logoMerlin} />
        <div className='title'>
          <h1>Le Déclin</h1>
          <h2>des</h2>
          <h3>Ames</h3>
        </div>
        <Link to='/create'>
          <BigButton text='JOUER' height='100' />
        </Link>
      </div>
    </div>
  )
}
export default Home
