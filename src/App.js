import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactIntl from 'react-intl';
import Authentication from './containers/authentication'
import Login from './components/login'
import Home from './containers/home'


class App extends React.Component {


    render() {


        return (
          <div>
            <Router history={hashHistory}>
              <Route path ='/' component={Home} />
              <Route path ='/login' component={Login} />
              <Route path='*' component={Home} />
            </Router>
          </div>
        );
    }
}

export default App;
