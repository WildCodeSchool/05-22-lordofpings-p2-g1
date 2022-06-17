import React, {useState} from 'react'

import buttonNormal from '../assets/img/ui/bigbutton.svg'
import buttonPressed from '../assets/img/ui/bigbutton2.svg'

const MainButton = () => {
    // const [buttonPressed, setButtonPressed] = useState()
    // const [buttonNormal, setButtonNormal] = useState()

    return (
        <div className='bigButton' style={{backgroundImage: `url(${buttonNormal})` }}>
          <div className='pressed' style={{backgroundImage: `url(${buttonPressed})` }}>Parler au barman</div>
        </div>
      )
    }
    
    export default BigButton