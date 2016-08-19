import React from 'react'
import {Link} from 'react-router'


class Navigation extends React.Component {


render() {
  return (
    <div>
      <Link activeStyle={{color: '#fff'}} to='/'>Home</Link> &nbsp;
      <Link activeStyle={{color: '#9CCC65'}} to='/Login'>Login</Link> &nbsp;

    </div>
  )
}



}


export default Navigation;
