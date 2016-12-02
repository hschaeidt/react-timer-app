import React from 'react';
import Navigation from './Navigation';

const Main = ({ children }) => (
  <div>
    <div>
      <div>
        <Navigation />
        <div className="column small-centered medium-6 large-4">
          {children}
        </div>
      </div>
    </div>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element,
};

export default Main;
