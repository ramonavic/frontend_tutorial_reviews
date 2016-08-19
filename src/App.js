import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactIntl from 'react-intl';
import Authentication from './containers/authentication'
import TutorialList from './containers/tutorialList'
import Login from './components/login'
import Home from './containers/home'

class App extends React.Component {

    render() {
        return (
          <Router history={hashHistory}>
            <Route path ='/' component={Home} />
            <Route path ='/login' component={Login} />
            <Route path='*' component={Home} />

          </Router>

        );
    }
}

export default App;
