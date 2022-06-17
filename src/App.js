import { Routes, Route } from 'react-router-dom'
import Characters from './pages/Characters'
import Concept from './pages/Concept'
// import Home from './pages/Home'
import Game from './pages/Game'

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/create' element={<Characters />} />
        <Route path='/concept' element={<Concept />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
