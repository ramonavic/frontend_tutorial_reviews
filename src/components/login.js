import React from 'react';
import Logout from './logout'
import $ from 'jquery'

class Login extends React.Component {

    loginUser(event) {
      event.preventDefault();
      let component = this
      let email = this.refs.email.value;
      let password = this.refs.password.value;

      let user = {
          email: email,
          password: password,
          remember_me: 1
        };



      $.ajax({
        url: "https://tutorial-api.herokuapp.com/users/sign_in.json",
        type: "POST",
        data: JSON.stringify({
            user: user
        }),
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
          JSON.stringify(data)
            let userEmail = localStorage.setItem('email', data.email)
            let storeToken = localStorage.setItem('token', data.authentication_token)
            let email = localStorage.getItem('email')
            let userToken = localStorage.getItem('token')

            $.ajaxSetup({
              headers: { 'X-User-Token':userToken, 'X-User-Email': email
            }
          })

          component.refs.email.value = "";
          component.refs.password.value = "";

        },

        fail: function(error){
          console.log(error)
          }
        })




      }







    render() {
        return (
            <div>
              <form onSubmit={this.loginUser.bind(this)} >
                  <input type="text" ref="email" hintText ="Email" />
                  <input type="text" ref="password" hintText ="Password"/>
                  <button>Login</button>
              </form>
            </div>

        );
    }
}

export default Login;
