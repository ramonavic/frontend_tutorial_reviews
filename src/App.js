import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactIntl from 'react-intl';
import Login from './components/login'
import Home from './containers/home'
import TutorialForm from './components/tutorialForm'

class App extends React.Component {


  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path ='/' component={Login} />
          <Route path = '/home' component={Home} />
          <Route path ='/login' component={Login} />
          <Route path ='/add' component={TutorialForm} />
          <Route path='*' component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
