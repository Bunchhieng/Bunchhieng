import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './src/components/App';
import Courses from './src/components/Courses';
import Home from './src/components/home';
import PageNotFound from './src/components/PageNotFound';
import Projects from './src/components/Projects';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />
    <Route path="/courses" mapMenuTitle="Coures" component={Courses} />
    <Route path="/projects" mapMenuTitle="Projects" component={Projects} />

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

ReactDOM.render((
  <Router history={browserHistory} routes={routes}/>
), document.getElementById('app'));
HelloWorld
