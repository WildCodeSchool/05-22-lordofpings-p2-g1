import React, { useState } from 'react'
import { useEffect } from 'react'

const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  const [email, setEmail] = useState('')
  useEffect(() => {
    console.log(`An email has been entered`)
  }, [email])

  const [ClientName, setClientName] = useState('')
  console.log(`A ClientName has been entrered`)

  return (
    <div className='grandmaContainer'>
      <div className='motherContainer'>
        <h1> Contactez-nous </h1>
        <hr></hr>
        <div className='formContainer'>
          <form onSubmit={handleSubmit}>
            <label className='labels' htmlFor='email'>
              Votre prénom :{' '}
            </label>
            <br></br>
            <input
              type='text'
              placeholder='Lola Fourth'
              value={ClientName}
              onChange={e => setClientName(e.target.value)}
            />
            <br></br>
            <label className='labels' htmlFor='email'>
              Votre email:{' '}
            </label>
            <br></br>
            <input
              type='text'
              placeholder='Lola4th@setmail.fr'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br></br>
            <label className='labels' htmlFor='selection'>
              Choisissez à qui vous souhaitez parler ! :
            </label>
            <select>
              <option value='Romain'>Romain</option>
              <option value='Remi'>Rémi</option>
              <option value='Alexandra'>Alexandra</option>
              <option value='Laure'>Laure</option>
              <option value='Jérémy'>Jérémy</option>
              <option value='Flora'>Flora</option>
              <option value='Vincent'>Vincent</option>
            </select>
          </form>

          <br></br>
          <input type='textarea' placeholder='Votre message ici !' />
          <br></br>
          <button onSubmit={handleSubmit}> Lancer son parchemin </button>
        </div>
      </div>
    </div>
  )
}
export default ContactForm
