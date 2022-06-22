import GameWonButton from './GameWonButton'

function GameWon() {
  return (
    <div className='gameWon'>
      <div className='containerLeft'>
        <GameWonButton />
      </div>
      <div className='containerRight'>
        <h1>VOUS AVEZ REUSSI !</h1>
        <hr></hr>
        <p>
          Vous avez arrêté la folie de Merlin et la propagation de golems. Le
          Roi vous en remercie en vous donnant une récompense conséquente.
        </p>
      </div>
    </div>
  )
}

export default GameWon
