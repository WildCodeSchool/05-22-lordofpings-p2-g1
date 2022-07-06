import { Link } from 'react-router-dom'
import Team from '../components/Team'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
<<<<<<< HEAD
    <div className='Background'>
      <Team />
      <ContactForm />

=======
    <div>
      <div className='containerContact'>
        <Team />
        <ContactForm />
      </div>
>>>>>>> dev
      <Link to='/'>
        <button className='returnButton'>Retourner à la page principale</button>
      </Link>
    </div>
  )
}

export default Contact
