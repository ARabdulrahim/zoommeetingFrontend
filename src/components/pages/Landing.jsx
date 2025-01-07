import React from 'react'
import { useNavigate, Link } from 'react-router-dom';




function Landing() {
  const naviget=useNavigate();
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='naveHeader'>Video Call</div>
        <div className='navlist'>
        <p onClick={()=> naviget("/sd234sdf")}>join as Guest</p>
          <p onClick={()=> naviget("/auth")}>Register</p>
          <div role='button'>
          <p onClick={()=> naviget("/auth")}>Log In</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"#FF9839"}}>Connect</span> with your Loved ones</h1>
          <p>Cover a distance by vodeo call</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/src/assets/mobile.png" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Landing;
