import Alex from '../assets/img/avatar/7.png'
import Vincent from '../assets/img/avatar/1.png'
import Flora from '../assets/img/avatar/3.png'
import Laure from '../assets/img/avatar/6.png'
import Remi from '../assets/img/avatar/41.png'
import Romain from '../assets/img/avatar/5.png'
import Jeremy from '../assets/img/avatar/2.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const CardsPerso = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const sizefont0 = {
    fontSize: '11px'
  }

  const sizefont1 = {
    fontSize: '10px'
  }

  const sizefont2 = {
    fontSize: '9px'
  }
  const sizefont3 = {
    fontSize: '8px'
  }
  const sizefont4 = {
    fontSize: '7px'
  }
  const sizefont5 = {
    fontSize: '6px'
  }
  const sizefont6 = {
    fontSize: '4px'
  }

  return (
    <div className='teamContact'>
      <Slider {...settings}>
        <div className='wrapper'>
          <div className='clash-card'>
            <div className='clash-card__image clash-card__image--bg'>
              <img src={Vincent} alt='avatar' />
            </div>
            <div className='interiorCard'>
              <div className='clash-card__level clash-card__class'>Barde</div>
              <div className='clash-card__unit-name'>Vincent</div>
              <div className='titles'>Développeur de Génie</div>
              <div className='clash-card__unit-description'>
                Curieux, flemmard né, sauf si le sujet l’intéresse. Aime titrer.
                Est fan de développement, c’est ainsi qu’il a été nommé le
                OneLiner.
              </div>
            </div>
            <a
              href='https://github.com/Canon321'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia1'></button>
            </a>
            <a
              href='https://linkedin.com/in/vincent-briand44'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia2'></button>
            </a>
          </div>
        </div>

        <div className='wrapper'>
          <div className='clash-card'>
            <div className='clash-card__image clash-card__image--bg'>
              <img src={Flora} alt='avatar' />
            </div>
            <div className='interiorCard'>
              <div className='clash-card__level clash-card__class'>Druide</div>

              <div className='clash-card__unit-name'>Flora</div>
              <div className='titles'>
                Développeuse ascendante formatrice en neuroatypie depuis 2020
              </div>
              <div className='clash-card__unit-description'>
                “Sait cuisiner, parler de troubles mentaux sans jugement, et
                parfois code entre-temps” / “Une développeuse cheloue”
              </div>
            </div>
            <a
              href='https://github.com/Synchy'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia1'></button>
            </a>
            <a
              href='https://www.linkedin.com/in/flora-c-2630a7168/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia2'></button>
            </a>
          </div>
        </div>
        <div className='wrapper'>
          <div className='clash-card'>
            <div className='clash-card__image clash-card__image--bg'>
              <img src={Jeremy} alt='avatar' />
            </div>
            <div className='interiorCard'>
              <div className='clash-card__level clash-card__class'>Rôdeur</div>
              <div className='clash-card__unit-name'>Jérémy</div>
              <div className='titles'>
                Développeur, ancien caviste et fan de pleins de trucs
              </div>
              <div className='clash-card__unit-description'>
                “Je tente des trucs sur css, si ça ne marche pas je recommence
                et si vraiment ça ne marche pas j'appelle Vincent.”
              </div>
            </div>
            <a
              href='https://github.com/kirijeremy'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia1'></button>
            </a>
            <a
              href=' https://www.linkedin.com/in/j%C3%A9r%C3%A9my-maupome-5b5497224/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia2'></button>
            </a>
          </div>
        </div>

        <div className='wrapper'>
          <div className='clash-card'>
            <div className='clash-card__image clash-card__image--bg'>
              <img src={Laure} alt='avatar' />
            </div>
            <div className='interiorCard'>
              <div className='clash-card__level clash-card__class'>Rôdeuse</div>

              <div className='clash-card__unit-name'>Laure</div>
              <div className='titles'>
                Développeuse-ancienne technicienne d’assistance logiciel
              </div>
              <div className='clash-card__unit-description'>
                “ Geek à ses heures perdues - binge watcheuse <br></br>“ une
                série entraîne une autre série…" "
              </div>
            </div>
            <a
              href='https://github.com/laure-carillo'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia1'></button>
            </a>
            <a
              href='https://www.linkedin.com/in/laure-carillo-95957473/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia2'></button>
            </a>
          </div>
        </div>

        <div className='wrapper'>
          <div className='clash-card'>
            <div className='clash-card__image clash-card__image--bg'>
              <img src={Remi} alt='avatar' />
            </div>
            <div className='interiorCard'>
              <div className='clash-card__level clash-card__class'>Druide</div>
              <div className='clash-card__unit-name'>Rémi</div>
              <div className='titles'>Cyclo-développeur</div>
              <div className='clash-card__unit-description'>
                “ Déraille souvent pour mieux pédaler. <br></br>Arrive à ses
                fins même si je dois y passer par quatre chemins.”
              </div>
            </div>
            <a
              href='https://github.com/remisam'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia1'></button>
            </a>
            <a
              href='https://www.linkedin.com/in/remisamson/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia2'></button>
            </a>
          </div>
        </div>

        <div className='wrapper'>
          <div className='clash-card'>
            <div className='clash-card__image clash-card__image--bg'>
              <img src={Alex} alt='avatar' />
            </div>
            <div className='interiorCard'>
              <div className='clash-card__level clash-card__class'>Paladin</div>
              <div className='clash-card__unit-name'>Alexandra</div>
              <div className='titles'>
                Couteau suisse / Développeuse / Conteuse / Artisane / Rôliste
                /Grand Maître du Jeu / En quête du Saint UI / UX
              </div>
              <div className='clash-card__unit-description'>
                “ Un besoin de connaissance extrême, jamais sans un de mes
                carnets. Bisounours dans l’âme. Git add câlin.”
              </div>
            </div>
            <a
              href='https://github.com/alexandrapanastier'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia1'></button>
            </a>
            <a
              href='https://www.linkedin.com/in/alexandra-panastier-97503023a/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia2'></button>
            </a>
          </div>
        </div>

        <div className='wrapper'>
          <div className='clash-card'>
            <div className='clash-card__image clash-card__image--bg'>
              <img src={Romain} alt='avatar' />
            </div>
            <div className='interiorCard'>
              <div className='clash-card__level clash-card__class'>Mage</div>
              <div className='clash-card__unit-name'>Romain</div>
              <div className='titles'>
                Développeur, <span style={sizefont0}>scénariste</span>,
                <span style={sizefont1}> seigneur des Dragons</span>,
                <span style={sizefont2}>
                  {' '}
                  lieutenant des Orques d’Arhg’baad,
                </span>
                <span style={sizefont3}>Top Chef 2020,</span>
                <span style={sizefont4}>
                  Grand Maître de l’Ordre du Big Mac,
                </span>
                <span style={sizefont5}>
                  Membre Honoraire de la Congrégation du Vignoble,
                </span>
                <span style={sizefont6}> Cultiste de Cthulhu du mois </span>
              </div>
              <div className='clash-card__unit-description'>
                “J'écris des trucs, je fais un git push et <br></br>je regarde
                le monde sombrer dans les flammes.”
              </div>
            </div>
            <a
              href='https://github.com/RomainRoy83'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia1'></button>
            </a>
            <a
              href='https://www.linkedin.com/in/romainroyhk/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='socialmedia2'></button>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default CardsPerso
