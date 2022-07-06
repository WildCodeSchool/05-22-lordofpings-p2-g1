import BigButton from './BigButton'

const GameStoryButtons = ({ quest, setPage, animation }) => {
  return (
    <div
      className='gameStoryButtons'
      animation={animation.toString()}
      style={{ height: '75px' }}
    >
      {quest &&
        !animation &&
        quest.buttons.map((button, index) => (
          <BigButton
            key={index}
            onclick={() => setPage(button.quest)}
            text={button.title}
            height='85'
          />
        ))}
    </div>
  )
}

export default GameStoryButtons
