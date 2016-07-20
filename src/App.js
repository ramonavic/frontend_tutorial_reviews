import React from 'react';
import Authentication from './containers/authentication'
import TutorialList from './containers/tutorialList'

class App extends React.Component {
    render() {
        return (
          <div>
            <div>
              <Authentication />
            </div>
            <div>
              <TutorialList />
            </div>
          </div>
        );
    }
}

export default App;
