import GameWonButton from './GameWonButton'

function GameWon() {
  return (
    <div className='gameWon'>
      <div className='containerLeft'>
        <GameWonButton />
      </div>
      <div className='containerRight'>
        <h1>VOUS AVEZ RÉUSSI !</h1>
        <p>
          Vous avez arrêté la folie de Merlin et la propagation des golems. Le
          Roi vous en remercie et vous rétribue généreusement.
        </p>
      </div>
    </div>
  )
}

export default GameWon
