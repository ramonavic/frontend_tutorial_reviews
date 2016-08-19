import React from 'react'
import {Link} from 'react-router'


class Navigation extends React.Component {


render() {
  return (
    <div>
      <Link activeStyle={{color: '#53acff'}} to='/'>Home</Link> &nbsp;
      <Link activeStyle={{color: '#53acff'}} to='/Login'>Login</Link> &nbsp;

    </div>
  )
}



}


export default Navigation;
