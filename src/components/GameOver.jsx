import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gameover from '../assets/img/gameover.svg'

function GameOver({ setPage, setHero }) {
  useEffect(() => {
    setHero('')
  }, [])

  return (
    <div className='gameOver'>
      <div className='containermother'>
        <div className='containerLeft'>
          <hr></hr>
          <p>VOUS ÊTES MORT</p>
          <hr></hr>
        </div>

        <div className='containerRight'>
          <img src={gameover} className='imgGameOver' draggable={false} />
          <Link to='/' draggable={false}>
            {' '}
            <button onClick={() => setPage(-1)}> Restart </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GameOver
