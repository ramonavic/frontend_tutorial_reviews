import React from 'react'
import TutorialList from './tutorialList'
import Navigation from '../components/navigation'

class Home extends React.Component {



  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div>
          <TutorialList />
        </div>
      </div>


    )
  }





}

export default Home 
