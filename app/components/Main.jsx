import { h } from 'preact';
import { Router, route } from 'preact-router';
import Navigation from './Navigation';
import Countdown from './Countdown';
import Timer from './Timer';

const Main = () => (
  <div class="timer-app">
    <Navigation />
    <div className="column small-centered medium-6 large-4">
      <Router>
        <Timer path="/" />
        <Countdown path="/countdown" />
      </Router>
    </div>
  </div>
);

export default Main;
