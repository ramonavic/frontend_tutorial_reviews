import React from 'react'
import {Link} from 'react-router'
import styles from '../assets/style/navigation.css.js'
import Logout from './logout'

class Navigation extends React.Component {


render() {
  return (
      <div>
        <ul style={styles.navList}>
          <Link style={styles.navListItem} activeStyle={styles.navActive} to='/'>Home</Link> &nbsp;
          <Link style={styles.navListItem} activeStyle={styles.navActive} to='/add'>Add Tutorial</Link> &nbsp;
          <Link style={styles.navListItem} activeStyle={styles.navActive} to='/Login'>Login</Link> &nbsp;
          <Logout />
        </ul>
      </div>
  )
}



}


export default Navigation;
