import { React, useState, useEffect, useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import GameOver from '../components/GameOver'
import GameSkills from '../components/GameSkills'
import GameStory from '../components/GameStory'
import GameTavern from '../components/GameTavern'
import GameWon from '../components/GameWon'

import forest from '../assets/img/background/forest1.svg'
import gameWonImg from '../assets/img/background/gameWon.svg'
import tavernImg from '../assets/img/background/tavern.svg'
import skillsImg from '../assets/img/background/arena.svg'

import quests from '../assets/json/frame.json'
import Contact from './Contact'

const Game = () => {
  const [page, setPage] = useState(parseInt(localStorage.getItem('page'))) // ID de la page en cours (Sommaire au dessous)
  // -1 = Game Launch [Setup]// ID de la quête en cours
  // 0+ = Game Story
  // 1000 = Game Tavern
  // 1001 = Game Over
  // 1002 = Game Won
  // 1003 = Game Skills
  // 1004 = Game [Other]
  // 1005 = Contact
  const [quest, setQuest] = useState(
    JSON.stringify(quests[localStorage.getItem('quest')] || quests[0])
  )
  const [bg, setBg] = useState(0)
  const [hero, setHero] = useState(JSON.parse(localStorage.getItem('hero')))

  const setHeroData = data => {
    setHero(data)
    localStorage.setItem('hero', JSON.stringify(data))
  }

  const getCookie = cname => {
    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  const music = useRef(null)

  const [sound, setSound] = useState()
  const [volume, setVolume] = useState(parseInt(getCookie('volume')))
  const [isPlayedYolo, setIsPlayedYolo] = useState(false)
  useEffect(() => {
    localStorage.setItem('page', page)
    page < 1000 &&
      page > -1 &&
      (setQuest(quests[page]), localStorage.setItem('quest', page))
    page === null && setPage(0)
    page === -1 && setPage(localStorage.getItem('quest'))
    if (page < 1000) {
      // Game Story
      quest?.image ? setBg(quest.image) : setBg(forest)
      quest?.sound && sound !== quest.sound && setSound(quest.sound)
    } else if (page === 1000) {
      // Game Tavern
      setBg(tavernImg)
      setSound('assets/audio/tavern.mp3')
    } else if (page === 1001) {
      // Game Over
      setBg(undefined)
      setQuest(undefined)
      setHero(localStorage.removeItem('hero'))
      setSound('https://www.mboxdrive.com/game-over-epic-battle.mp3')
    } else if (page === 1002) {
      // Game Won
      setBg(gameWonImg)
      setQuest(undefined)
      setHero(localStorage.removeItem('hero'))
      setSound('https://www.mboxdrive.com/game-won-village-consort.mp3')
    } else if (page === 1003) {
      // Game Skills
      setBg(skillsImg)
      setSound('assets/audio/skills1.mp3')
    } else if (page === 1004) {
      // Game [Other]
      setBg()
    } else if (page === 1005) {
      // Contact
      setBg()
    } else {
      // Game Launch [Setup]
      setBg()
    }
  }, [page, quest])
  return (
    <>
      <ReactAudioPlayer
        src={sound}
        volume={volume / 100}
        loop={true}
        ref={music}
        onLoadedMetadata={() => setIsPlayedYolo(true)}
      />
      <div
        className='gameBackground'
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className='gameAdmin'>
        <b>ADMIN MENU: </b>
        <button onClick={() => setPage(localStorage.getItem('quest'))}>
          Story
        </button>
        <button onClick={() => setPage(1000)}>Tavern</button>
        <button onClick={() => setPage(1001)}>GameOver</button>
        <button onClick={() => setPage(1002)}>GameWon</button>
        <button onClick={() => setPage(1003)}>GameSkills</button>
        <button onClick={() => setPage(1005)}>Contact</button>
        <button onClick={() => setHero({ ...hero, heal: hero.maxHeal })}>
          Heal
        </button>
        <input type={'number'} onChange={e => setPage(e.target.value)} />
      </div>

      <div className='game' style={{ backgroundImage: bg && `url(${bg})` }}>
        {page < 1000 && (
          <GameStory
            quest={quest}
            setPage={setPage}
            hero={hero}
            setHero={setHeroData}
            music={music}
            isPlayedYolo={isPlayedYolo}
            volume={volume}
            setVolume={setVolume}
          />
        )}
        {page === 1000 && (
          <GameTavern
            hero={hero}
            setHero={setHeroData}
            setPage={setPage}
            music={music}
            isPlayedYolo={isPlayedYolo}
            volume={volume}
            setVolume={setVolume}
          />
        )}
        {page === 1001 && <GameOver setHero={setHeroData} setPage={setPage} />}
        {page === 1002 && <GameWon setPage={setPage} />}
        {page === 1003 && (
          <GameSkills
            hero={hero}
            setPage={setPage}
            music={music}
            isPlayedYolo={isPlayedYolo}
            volume={volume}
            setVolume={setVolume}
          />
        )}
        {page === 1005 && <Contact />}

        <div>
          <a
            style={{ margin: 0, textAlign: 'center', lineHeight: '40px' }}
            href={'https://fr.freepik.com/auteur/upklyak'}
          >
            Illustré par upklyak - fr.freepik.com
          </a>
        </div>
      </div>
    </>
  )
}

export default Game
