const GameStoryButtons = ({ quest, setPage }) => {
  return (
    <div className='button'>
      {quest.buttons.map((button, index) => (
        <button key={index} onClick={() => setPage(button.quest)}>
          {button.title}
        </button>
      ))}
    </div>
  )
}

export default GameStoryButtons
