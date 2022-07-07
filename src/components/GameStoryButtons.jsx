import { useState } from 'react'
import BigButton from './BigButton'

const GameStoryButtons = ({ quest, setPage, animation, hero }) => {
  const [unique, setUnique] = useState(localStorage.getItem('unique') || [])
  console.log(unique)

  const nextQuest = btn => {
    if (btn?.unique) {
      setUnique([...unique, btn.title])
      console.log(unique)
      localStorage.setItem('unique', [...unique, [btn.title]])
    }
    setPage(btn.quest)
  }
  return (
    <div
      className='gameStoryButtons'
      animation={animation.toString()}
      style={{ height: '75px' }}
    >
      {console.log({ hero })}
      {quest &&
        !animation &&
        quest.buttons
          .filter(
            btn =>
              hero.inventory.map(obj => obj.id).includes(btn?.item) ||
              !btn?.item
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
