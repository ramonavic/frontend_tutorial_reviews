import React from 'react';
import Logout from '../components/logout'
import Login from '../components/login'
import $ from 'jquery'

class Authentication extends React.Component {

  // componentDidMount() {
  //   console.log("Component Mount")
  //   $.ajaxSetup({
  //       headers: { 'X-User-Token': null, 'X-User-Email': null
  //     }
  //   });
  // }



  render() {
      return (
        <div>
          <div>
            <Login />
          </div>
            <div>
              <Logout />
          </div>
        </div>

      );
  }


}

export default Authentication
