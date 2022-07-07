import MainBackground from '../components/MainBackground'

import heroes from '../assets/json/heroes.json'
import Barbare from '../assets/img/heroes/archer.png'
import knight from '../assets/img/heroes/knight.png'
import { Link } from 'react-router-dom'

function Characters() {
  document.cookie = 'volume=60'
  document.cookie = 'volumeToggle=true'
  localStorage.setItem('quest', JSON.stringify(0))
  localStorage.setItem('page', JSON.stringify(0))

  return (
    <div className='characters'>
      <h1>Choisissez votre héroïne</h1>

      <div className='heroes'>
        {heroes &&
          heroes.map(hero => {
            return (
              <Link to='/game' key={hero.name} draggable={false}>
                <div
                  className='heroesCard'
                  onClick={() =>
                    localStorage.setItem('hero', JSON.stringify(hero))
                  }
                >
                  <div className='hero' key={hero.name}>
                    <img
                      src={hero?.class === 'barbare' ? Barbare : knight}
                      alt='hero'
                      className='imgHero'
                      draggable={false}
                    />
                    <div className='profil'>
                      <h2>{hero.name}</h2>
                    </div>
                  </div>
                  <div className='heroSkills'>
                    <h2>Statistiques</h2>
                    <div key={hero.skills}>
                      <ul>
                        <li>points de vie: {hero.heal} </li>
                        <li>pieces d&#39;or: {hero.money} </li>
                        <li>Agilité: {hero.skills.agility}</li>
                        <li>Force: {hero.skills.strength}</li>
                        <li>Intelligence: {hero.skills.intelligence}</li>
                        <li>Resistance: {hero.skills.resistance}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
      <MainBackground />
    </div>
  )
}

export default Characters
