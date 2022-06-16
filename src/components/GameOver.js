import { useEffect } from 'react'
import gameover from '../assets/img/gameover.svg'

function GameOver({ setPage }) {
  useEffect(() => {
    // setHero('')
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
          <img src={gameover} className='imgGameOver' />
          <button className='gameOverButton' onClick={() => setPage(-1)}>
            {' '}
            Restart{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
