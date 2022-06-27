import { useNavigate } from 'react-router-dom'
import Parchment from '../components/GameStoryParchment'
import BigButton from '../components/BigButton'
import MainBackground from '../components/MainBackground'
import { useState, useEffect } from 'react'

const Concept = () => {
  const [para, setPara] = useState(true)
  const [animation, setAnimation] = useState(true)
  const navigate = useNavigate()

  const concept = {
    text: 'Le Déclin des Âmes est une histoire interactive inspirée de la série “Un livre dont vous êtes le héros” de Gallimard ainsi que des jeux de rôle.   Le Déclin des Âmes prend place au sein du mythe du Roi Arthur. L’enchanteur Merlin est devenu fou et tourmente tout un village : il a créé des golems de pierre, les Témoins de Merlin, qui harcèlent la population pour leur parler de la grandeur de leur maître et leur vendre des babioles. Vous êtes une aventurière déterminée à mettre Merlin hors d’état de nuire (parce que ça rapporte du pognon).'
  }

  const rules = {
    text: 'Choisissez votre personnage, et avancez dans l’histoire en choisissant parmi les options proposées. Il n’y a pas de mauvais choix, seulement certaines conséquences douloureuses (la mort, ça compte comme une conséquence douloureuse). Vous aurez la possibilité d’acquérir de l’équipement et de participer à des mini-jeux à la taverne. Vos statistiques orienteront vos chances de réussite à certains tests critiques, mais ce sont surtout vos décisions qui détermineront l’histoire que vous vivrez.'
  }
  const [text, setText] = useState(concept)
  useEffect(() => (para === false ? setText(rules) : undefined), [para])

  return (
    <>
      <div className='concept'>
        <div className='conceptParchment'>
          <Parchment
            quest={text}
            animation={animation}
            setAnimation={setAnimation}
          />
        </div>
        <BigButton
          onclick={() =>
            animation === false &&
            (para ? setPara(!para) : navigate('../create'))
          }
          text='Continuer'
          height='100'
        />
      </div>
      <MainBackground />
    </>
  )
}

export default Concept
