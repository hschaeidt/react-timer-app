import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import 'foundation-sites/dist/foundation.min.css';
import './styles/app.scss';
import Main from './components/Main';
import Countdown from './components/Countdown';
import Timer from './components/Timer';

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
