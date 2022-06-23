import book from '../assets/img/props/book.svg'
import { Link } from 'react-router-dom'

function GameWonButton({ setPage }) {
  return (
    <div className='GameWonButton'>
      <img src={book} className='book' draggable={false} />
      <Link to='/' draggable={false}>
        {' '}
        <button onClick={() => setPage(-1)}> Rejouer </button>
      </Link>
    </div>
  )
}

export default GameWonButton
