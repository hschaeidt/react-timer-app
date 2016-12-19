import { h, Component } from 'preact';
import { Router, Link } from 'preact-router';

export default () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">Timer-App</li>
        <li>
          <Link href="/">Timer</Link>
        </li>
        <li>
          <Link href="/countdown">Countdown</Link>
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
