import React from 'react'

const GameTavern = () => {
  // 0 = No menu
  // 1 = Quest
  // 2 = Shop
  // 3 = Mini Games
  const [menu, setMenu] = React.useState(0)

  return (
    <div className='gameTavern'>
      <div className='target' onClick={() => setMenu(3)} />
      <div className='barman' onClick={() => setMenu(1)} />
      <div className='knife' onClick={() => setMenu(0)} />
      <div className='idiot' onClick={() => setMenu(2)} />
      {/* {menu === 1 && <GameTavernQuest /> */}
      {/* menu === 2 && <GameTavernShop /> */}
      {/* menu === 3 && <GameTavernSkills />} */}
    </div>
  )
}

export default GameTavern
