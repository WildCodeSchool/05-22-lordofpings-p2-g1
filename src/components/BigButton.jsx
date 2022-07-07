const BigButton = ({ text, height, onclick }) => {
  let fontSize = height / 5
  if (text.length > 20) {
    fontSize = height / 8
  }

  return (
    <button
      className='bigButton'
      style={{ height: `${height}px` }}
      onClick={onclick}
    >
      <p style={{ fontSize, lineHeight: `${fontSize}px` }}>{text}</p>
    </button>
  )
}

export default BigButton
