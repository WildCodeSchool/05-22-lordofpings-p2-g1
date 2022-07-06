import { useEffect, useState } from 'react'
import GameHeader from './GameHeader'
import GameTavernShop from './GameTavernShop'

const GameTavern = ({
  hero,
  setHero,
  setPage,
  isPlayedYolo,
  music,
  volume,
  setVolume
}) => {
  // 0 = No menu
  // 1 = Quest
  // 2 = Shop
  // 3 = Mini Games
  const [menu, setMenu] = useState(0)

  useEffect(() => {
    menu === 1 && setPage(-1)
    menu === 3 && setPage(1003)
  }, [menu])

  return (
    <div className='gameTavern'>
      <GameHeader
        hero={hero}
        music={music}
        isPlayedYolo={isPlayedYolo}
        volume={volume}
        setVolume={setVolume}
      />
      <div className='target' onClick={() => setMenu(3)} />
      <div className='barman' onClick={() => setMenu(1)} />
      <div className='knife' onClick={() => setMenu(0)} />
      <div className='idiot' onClick={() => setMenu(2)} />

      {/*<GameTavernQuest /> */}
      {menu === 2 && (
        <GameTavernShop setMenu={setMenu} hero={hero} setHero={setHero} />
      )}
    </div>
  )
}

export default GameTavern
