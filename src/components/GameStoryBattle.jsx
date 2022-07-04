import GameStoryBattleDice from './GameStoryBattleDice'

const GameStoryBattle = ({ quest, setPage, hero, setHero, setShowButton }) => {
  return (
    <div className='gameStoryBattle'>
      {
        <GameStoryBattleDice
          hero={hero}
          setHero={setHero}
          setPage={setPage}
          quest={quest}
          setShowButton={setShowButton}
        />
      }
    </div>
  )
}

export default GameStoryBattle
