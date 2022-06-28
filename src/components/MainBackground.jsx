import book from '../assets/img/background/mainbg/book.svg'
import bubble from '../assets/img/background/mainbg/bubble.svg'
import cauldron from '../assets/img/background/mainbg/cauldron.svg'
import crystalBall from '../assets/img/background/mainbg/crystal_ball.svg'
import crystalBallSupport from '../assets/img/background/mainbg/crystal_ball_support.svg'
import crystalPink from '../assets/img/background/mainbg/crystal_pink.svg'
import crystalYellow from '../assets/img/background/mainbg/crystal_yellow.svg'
import mirror from '../assets/img/background/mainbg/mirror.svg'
import potion from '../assets/img/background/mainbg/potion.svg'

const MainBackground = () => {
  return (
    <div className='elementsMaster'>
      <div className='elements'>
        <div id='haloPotion'></div>
        <div id='haloCrystal'></div>
        <div id='haloBook'></div>
        <img
          src={book}
          className='backgroundElement'
          id='book'
          draggable='false'
        />
        <div id='cauldronBubbles'>
          <img
            src={bubble}
            className='backgroundElement bubble'
            id='bubble1'
            draggable='false'
          />
          <img
            src={bubble}
            className='backgroundElement bubble'
            id='bubble2'
            draggable='false'
          />
          <img
            src={bubble}
            className='backgroundElement bubble'
            id='bubble3'
            draggable='false'
          />
          <img
            src={bubble}
            className='backgroundElement bubble'
            id='bubble4'
            draggable='false'
          />
          <img
            src={bubble}
            className='backgroundElement bubble'
            id='bubble5'
            draggable='false'
          />
          <img
            src={bubble}
            className='backgroundElement bubble'
            id='bubble6'
            draggable='false'
          />
          <img
            src={bubble}
            className='backgroundElement bubble'
            id='bubble7'
            draggable='false'
          />
          <img
            src={bubble}
            className='backgroundElement bubble'
            id='bubble8'
            draggable='false'
          />
        </div>
        <img
          src={cauldron}
          className='backgroundElement'
          id='cauldron'
          draggable='false'
        />
        <img
          src={crystalBall}
          className='backgroundElement'
          id='crystalBall'
          draggable='false'
        />
        <img
          src={crystalBallSupport}
          className='backgroundElement'
          id='crystalBallSupport'
          draggable='false'
        />
        <img
          src={crystalPink}
          className='backgroundElement'
          id='crystalPink'
          draggable='false'
        />
        <img
          src={crystalYellow}
          className='backgroundElement'
          id='crystalYellow'
          draggable='false'
        />
        <img
          src={mirror}
          className='backgroundElement'
          id='mirror'
          draggable='false'
        />
        <img
          src={potion}
          className='backgroundElement'
          id='potion'
          draggable='false'
        />
      </div>
    </div>
  )
}

export default MainBackground
