import { Routes, Route } from 'react-router-dom'
import Characters from './pages/Characters'
import Concept from './pages/Concept'
import Home from './pages/Home'
import Game from './pages/Game'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/create' element={<Characters />} />
        <Route path='/concept' element={<Concept />} />
        <Route path='/game' element={<Game />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
