import React from 'react'
import TutorialList from './tutorialList'
import Navigation from '../components/navigation'
import styles from '../assets/style/base.css.js'

class Home extends React.Component {
  constructor(props) {
    super()

  }

  render() {
    return (
      <div style={styles.baseColor}>
        <div>
          <Navigation />
        </div>
        <div>
          <TutorialList userToken={this.props.userToken} email={this.props.email} />
        </div>
      </div>


    )
  }





}

export default Home
