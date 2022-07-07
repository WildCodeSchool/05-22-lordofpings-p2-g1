import { useState } from 'react'
import BigButton from './BigButton'

const GameStoryButtons = ({ quest, setPage, animation, hero }) => {
  const [unique, setUnique] = useState(localStorage.getItem('unique') || [])

  const nextQuest = btn => {
    if (btn?.unique) {
      setUnique([...unique, btn.title])
      localStorage.setItem('unique', [...unique, [btn.title]])
    }
    setPage(btn.quest)
  }
  console.log(unique)
  return (
    <div className='gameStoryButtons' animation={animation.toString()}>
      {quest &&
        !animation &&
        quest.buttons
          .filter(
            btn => hero?.inventory.items.includes(btn?.item) || !btn?.item
          )
          .filter(btn => !unique.includes(btn?.title))
          .map((btn, i) => (
            <BigButton
              key={i}
              onclick={() => nextQuest(btn)}
              text={btn.title}
              height='75'
            />
          ))}
    </div>
  )
}

export default GameStoryButtons
