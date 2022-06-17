import BigButton from './BigButton'

const GameStoryButtons = ({ quest, setPage }) => {
  return (
    <div className='gameStoryButtons'>
      {quest &&
        quest.buttons.map((button, index) => (
          <BigButton
            key={index}
            onclick={() => setPage(button.quest)}
            text={button.title}
            height='75px'
          />
        ))}
    </div>
  )
}

export default GameStoryButtons
