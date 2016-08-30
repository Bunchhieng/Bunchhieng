import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './src/components/App';
import Courses from './src/components/Courses';
import Home from './src/components/home';
import Projects from './src/components/Projects';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/courses" component={Courses} />
      <Route path="/projects" component={Projects} />
    </Route>
  </Router>
), document.getElementById('app'))
