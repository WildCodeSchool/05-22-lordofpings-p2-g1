import book from '../assets/img/props/book.svg'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function GameWonButton({ setPage }) {
  return (
    <div className='GameWonButton'>
      <img src={book} className='book' />
      <Link to='/'>
        {' '}
        <button onClick={() => setPage(-1)}> Restart </button>
      </Link>
    </div>
  )
}

export default GameWonButton
