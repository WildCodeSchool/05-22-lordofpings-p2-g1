const BigButton = ({ text, height }) => {
  const fontSize = parseInt(height) / 5

  return (
    <div className='bigButton' style={{ height: height }}>
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
    </div>
  )
}

export default BigButton
