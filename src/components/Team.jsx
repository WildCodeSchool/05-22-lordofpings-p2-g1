import Alex from '../assets/img/avatar/Alex.png'
import Vincent from '../assets/img/avatar/Vincent.png'
import Flora from '../assets/img/avatar/Flora.png'
import Laure from '../assets/img/avatar/Laure.png'
import Remi from '../assets/img/avatar/Remi.png'
import Romain from '../assets/img/avatar/Romain.png'
import Jerem from '../assets/img/avatar/Jeremy.png'

const Team = () => {
  return (
    <div className='container'>
      <div className='title'>
        <h1>Notre Fabulueuse équipe</h1>
        <div className='top'>
          <div className='card'>
            <div className='face face1'>
              <h3>Vincent</h3>
              <div className='content'>
                <img src={Vincent} />
              </div>
            </div>
            <div className='face face2'>
              <div className='content'>
                <p>
                  <span>Alignement :</span>Joyeux<br></br>
                  <span>Classe :</span> Barde <br></br>
                  <span>Citation :</span> “Ça peut se faire en une ligne ”{' '}
                  <br></br>
                  Développeur de Génie
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='face face1'>
              <h3>Alexandra</h3>
              <div className='content'>
                <img src={Alex} />
              </div>
            </div>
            <div className='face face2'>
              <div className='content'>
                <p>
                  <span>Alignement :</span>Chaotique bon <br></br>
                  <span>Classe:</span> Paladin des temps modernes ( Oui, oui ça
                  existe. La preuve, je suis là ) <br></br>
                  <span>Citation :</span> “ J’vous nems ” <br></br> Couteau
                  suisse / Dévéloppeuse / Conteuse / Artisane / Rôliste / Grande
                  Maître du Jeu / En quête du Saint UI/UX
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='face face1'>
              <h3>Romain</h3>
              <div className='content'>
                <img src={Romain} />
              </div>
            </div>
            <div className='face face2'>
              <div className='content'>
                <p>
                  <span>Alignement :</span>Float left <br></br>
                  <span>Classe :</span> Oui <br></br>
                  <span>Citation :</span> “ Boh en vrai ça passe ” <br></br>
                  Développeur, scénariste, seigneur des Dragons, lieutenant des
                  Orques d’Arhg’baad, Top Chef 2020, Grand Maître de l’Ordre du
                  Big Mac, Membre Honoraire de la Congrégation du Vignoble,
                  Cultiste de Cthulhu du mois
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='card'>
            <div className='face face1'>
              <h3>Flora</h3>
              <div className='content'>
                <img src={Flora} />
              </div>
            </div>
            <div className='face face2'>
              <div className='content'>
                <p>
                  <span>Alignement :</span> Sorcière Chaotique <br></br>
                  <span>Classe :</span> Druide (What did you expect avec ce
                  prénom ?) <br></br>
                  <span>Citation :</span> “@&#$! pourquoi ça ne marche pas
                  encore !”
                  <br></br> Développeuse ascendante formatrice en neuroatypie
                  depuis 2020
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='face face1'>
              <h3>Jérémy</h3>
              <div className='content'>
                <img src={Jerem} />
              </div>
            </div>
            <div className='face face2'>
              <div className='content'>
                <p>
                  <span>Alignement :</span> Tranquille, enfin pas toujours{' '}
                  <br></br>
                  <span>Classe :</span> Rôdeur du Nord (Team froid) <br></br>
                  <span>Citation :</span>“ Utilise l’inspecteur ! ”<br></br>
                  Développeur, ancien caviste et fan de pleins de trucs
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='face face1'>
              <h3>Laure</h3>
              <div className='content'>
                <img src={Laure} />
              </div>
            </div>
            <div className='face face2'>
              <div className='content'>
                <p>
                  <span>Alignement :</span> Chaotique bon <br></br>
                  <span>Classe :</span> Rôdeuse <br></br>
                  <span>Citation :</span>“ Ma curiosité me perdra! ”<br></br>
                  Développeuse-ancienne technicienne d’assistance logiciel -
                  geek à ses heures perdues - binge watcheuse
                </p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='face face1'>
              <h3>Remi</h3>
              <div className='content'>
                <img src={Remi} />
              </div>
            </div>
            <div className='face face2'>
              <div className='content'>
                <p>
                  <span>Alignement :</span> Verticale, de la Terre aux étoiles
                  et inversement <br></br>
                  <span>Classe :</span> Druide à la barbe assombrie<br></br>
                  <span>Citation :</span>“ C'est en faisant n'importe quoi que
                  l'on devient codeur.”<br></br>
                  Cyclo-Développeur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
