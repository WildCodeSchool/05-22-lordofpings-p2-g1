import heroes from '../assets/json/heros.json'

function Characters() {
  return (
    <div className='characters'>
      <h1>Choisissez votre héros</h1>

      <div className='heroes'>
        {heroes &&
          heroes.map(hero => {
            return (
              <div className='heroesCard' key={hero.class}>
                <div className='hero' key={hero.class}>
                  <img
                    src={require(`../${hero.image}`)}
                    alt='hero'
                    className='imgHero'
                  />
                  <div className='profil'>
                    <h2>{hero.class}</h2>
                    <ul>
                      <li>{hero.heal} points de vie</li>
                      <li>{hero.money} pieces d&#39;or</li>
                    </ul>
                  </div>
                </div>
                <div className='heroSkills'>
                  <h2>Statistiques</h2>
                  <div key={hero.skills}>
                    <ul>
                      <li>Agilité: {hero.skills.agility}</li>
                      <li>Force: {hero.skills.strength}</li>
                      <li>Intelligence: {hero.skills.intelligence}</li>
                      <li>Resistance: {hero.skills.resistance}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Characters
