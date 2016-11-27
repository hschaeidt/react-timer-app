import React from 'react'
import Navigation from './Navigation'

export default (props) => (
  <div>
    <div>
      <div>
        <Navigation />
        <p>Main.jsx Rendered</p>
        {props.children}
      </div>
    </div>
  </div>
)
