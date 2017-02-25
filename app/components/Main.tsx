import * as React from 'react';
import Navigation from './Navigation';

const Main = (props: React.Props<any>) => (
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
);

export default Main;
