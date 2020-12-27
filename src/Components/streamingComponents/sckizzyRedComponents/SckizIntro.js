import './sckizzyComponents.css'
import React from "react"
import SckizLogo from '../../../SRProfile.png'

function SckizIntro() {
  return (
    <section className='imgLeftText'>
      <img alt='black and red S and R logo' src={SckizLogo} className='sckizzyLogo'></img>
      <h1>Sckizzy Red</h1>
    </section>
  )
}

export default SckizIntro