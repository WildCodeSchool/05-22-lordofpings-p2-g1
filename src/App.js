import React from 'react'
import GameHeaderHud from './components/GameHeaderHud'
import Characters from './pages/Characters'
import GameStoryBattleDice from './components/GameStoryBattleDice'
import GameOver from './components/GameOver'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GameStory from './components/GameStory'
import Parchment from './components/GameStoryParchment'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<div></div>} />
        <Route path='/story' element={<GameStory />} />
      </Routes>
    </div>
  )
}

export default App
