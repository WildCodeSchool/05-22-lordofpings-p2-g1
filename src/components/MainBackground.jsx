import book from '../assets/img/background/mainbg/book.svg'
import bubble from '../assets/img/background/mainbg/bubble.svg'
import cauldron from '../assets/img/background/mainbg/cauldron.svg'
import crystalBall from '../assets/img/background/mainbg/crystal_ball.svg'
import crystalBallAndSupport from '../assets/img/background/mainbg/crystal_ball_and_support.svg'
import crystalBallSupport from '../assets/img/background/mainbg/crystal_ball_support.svg'
import crystalPink from '../assets/img/background/mainbg/crystal_pink.svg'
import crystalYellow from '../assets/img/background/mainbg/crystal_yellow.svg'
import mirror from '../assets/img/background/mainbg/mirror.svg'
import potion from '../assets/img/background/mainbg/potion.svg'

const MainBackground = () => {
  return (
    <div className='elementsMaster'>
      <div className='elements'>
        <div id='haloYellow'></div>
        <div id='haloYellow2'></div>
        <div id='halobook'></div>
        <img src={book} className='backgroundElement' id='book' />
        <img src={bubble} className='backgroundElement' id='bubble' />
        <img src={cauldron} className='backgroundElement' id='cauldron' />
        <img src={crystalBall} className='backgroundElement' id='crystalBall' />
        <img
          src={crystalBallAndSupport}
          className='backgroundElement'
          id='crystalBallAndSupport'
        />
        <img
          src={crystalBallSupport}
          className='backgroundElement'
          id='crystalBallSupport'
        />
        <img src={crystalPink} className='backgroundElement' id='crystalPink' />
        <img
          src={crystalYellow}
          className='backgroundElement'
          id='crystalYellow'
        />
        <img src={mirror} className='backgroundElement' id='mirror' />
        <img src={potion} className='backgroundElement' id='potion' />
      </div>
    </div>
  )
}

export default MainBackground
