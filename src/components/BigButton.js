const BigButton = ({ text, height, onclick }) => {
  const fontSize = parseInt(height) / 5

  return (
    <button className='bigButton' style={{ height: height }} onClick={onclick}>
      <p style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize}px` }}>
        {text}
      </p>
    </button>
  )
}

export default BigButton
