const Dice = ({ face, rolling }) => {
  face = face ? face : 1
  return <div className={`dice-${face} ${rolling && 'shaking'}`}></div>
}
export default Dice
