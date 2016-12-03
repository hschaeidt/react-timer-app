import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import './styles/app.scss';
import Main from './components/Main';
import Countdown from './components/Countdown';
import Timer from './components/Timer';
import Tracker from './components/tracker/Tracker';

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <Route path="tracker" component={Tracker} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
