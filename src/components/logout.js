import React from 'react';
import $ from 'jquery'

class Logout extends React.Component {

  logoutUser(event) {
      event.preventDefault();


      $.ajax({
        url: "https://tutorial-api.herokuapp.com/users/sign_out.json",
        type: "DELETE",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
          console.log("User session terminated")
          let deleteEmail = localStorage.setItem('email', null)
          let deleteToken = localStorage.setItem('token', null)
          let noEmail = localStorage.getItem('email')
          let noUserToken = localStorage.getItem('token')
          
          console.log(noEmail)
          console.log(noUserToken)

          $.ajaxSetup({
            headers: { 'X-User-Token': noUserToken, 'X-User-Email': noEmail
                }
              });
        },

        fail: function(error){
          console.log(error)
        }
      })

    }


render() {
  return(
    <div>
      <button onClick={this.logoutUser.bind(this)}> Logout </button>
    </div>

  )
}

}


export default Logout;
