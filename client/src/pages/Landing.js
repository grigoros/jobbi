import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
return (
  <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      {/*info*/}
      <div className='info'>
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>
          Food truck tacos church-key, live-edge ramps poutine fashion axe kickstarter leggings. Brunch stumptown enamel pin, iPhone celiac vexillologist polaroid. Blue bottle listicle mixtape, squid deep v tote bag irony selfies offal roof party dreamcatcher.
        </p>
        <Link to='/access' className="btn btn-hero">
          Login/Register
        </Link>
      </div>
      <img src={main} alt="job hunt" className="img
      main-img" />
    </div>
  </Wrapper>
  )
}

export default Landing

