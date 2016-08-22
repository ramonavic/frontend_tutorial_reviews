import React from 'react';
import Logout from './logout'
import $ from 'jquery'
import styles from '../assets/style/authentication.css.js'
import Home from '../containers/home'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      userToken: null,
      email: null
    }
    console.log(this.state.email)

  }


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

          component.setState({
            userToken: userToken,
            email: email
          })
          console.log(component.state.email)


        },

        fail: function(error){
          console.log(error)
          }
        })




      }







    render() {

      if (this.state.email == null ) {

        return (
          <div style={styles.wrapper}>
            <div className='container'>
              <form style={styles.formSignin} onSubmit={this.loginUser.bind(this)} >
                <h2 style={styles.loginHeader}> Please Sign in </h2>
                <input style={styles.inputEmail} type="text" ref="email" placeholder='Email' />
                <input style={styles.inputPassword} type="text" ref="password" placeholder ="Password"/>
                <button className='btn btn-lg btn-primary btn-block'>Login</button> <br/>
                <strong> Take a look: </strong><br/>
                <small><em> Email: "frank@ex.com" <br/> password: "1234abcd" <br/> </em></small>
              </form>
            </div>
          </div>

        );


      } else {
        return (
          <Home userToken={this.state.userToken} email={this.state.email}/>
        )
      }
    }

}

export default Login;
