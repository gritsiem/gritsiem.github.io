import React from 'react'

export default function LandingComponent(props) {
  return (
    <div className='landing-container'>
        <div className='greeting-container'>
          <p>Welcome! I am </p>
            <p>
              {props.content.name.First}!
            </p>
            <p>
              A Software Developer
            </p>
            
              {props.content.loc.City}, {props.content.loc.State}
        </div>
        <div className='menu-container'>
          <div className="menu">
            <div className="menu-card">About</div>
            <div className="menu-card">Projects</div>
            <div className="menu-card">Reach me at</div>
            <div className="menu-card">Surprise!</div>
          </div>

        </div>
    </div>
  )
}
