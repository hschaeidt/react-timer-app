import React from 'react'
import Navigation from './Navigation'

export default (props) => (
  <div>
    <div>
      <div>
        <Navigation />
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  </div>
)
