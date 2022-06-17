import buttonNormal from '../assets/img/ui/bigbutton.svg'
import buttonPressed from '../assets/img/ui/bigbutton2.svg'

const BigButton = ({ text }) => {
  return (
    <div
      className='bigButton'
      style={{ backgroundImage: `url(${buttonNormal})` }}
    >
      <div
        className='pressed'
        style={{ backgroundImage: `url(${buttonPressed})` }}
      >
        {text}
      </div>
    </div>
  )
}

export default BigButton
