import React from 'react';
import { Link, IndexLink } from 'react-router';

export default () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">Timer-App</li>
        <li>
          <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
        </li>
        <li>
          <Link to="/countdown" activeClassName="active-link">Countdown</Link>
        </li>
        <li>
          <Link to="/tracker" activeClassName="active-link">Tracker</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">Created by somebody</li>
      </ul>
    </div>
  </div>
);
