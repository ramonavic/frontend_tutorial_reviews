import React from 'react';
import $ from 'jquery'

class Login extends React.Component {

  store(email, userToken, data) {
    if (data) {
      return localStorage.setItem(email, JSON.stringify(data));
    }
    console.log(data)
    var store = localStorage.getItem(email);
    return (store && JSON.parse(store)) || [];
  }


    logoutUser(event) {
      event.preventDefault();

      $.ajaxSetup({
        headers: { 'X-User-Token': $('meta[name="authentication_token"]', 'X-User-Email', 'frank@ex.com').attr('users')
        }
      });

      $.ajax({
        url: "https://tutorial-api.herokuapp.com/users/sign_out.json",
        type: "DELETE",
        contentType: "application/json",
        dataType: "json",
        succes: store(data),

        fail: function(error){
          console.log(error)
        }
      })

    }


    loginUser(event) {
      event.preventDefault();
      let component = this
      let email = this.refs.email.value
      let password = this.refs.password.value

      let user = {
          email: email,
          password: password,
          remember_me: 1
        };

      $.ajaxSetup({
      headers: { 'X-User-Token': $('meta[name="authentication_token"]', 'X-User-Email', 'frank@ex.com').attr('users')
        }
      });

      console.log("Email: ", email, "Password: ", password)




      $.ajax({
        url: "https://tutorial-api.herokuapp.com/users/sign_in.json",
        type: "POST",
        data: JSON.stringify({
            user: user
        }),
        contentType: "application/json",
        dataType: "json",
        succes: function(json) {
          JSON.stringify(json)
          store(json)
          console.log(json)
        },

        fail: function(error){
          console.log(error)
        }
      })
    }


    getTutorials(event) {
      localStorage.getItem(email, userToken)
      event.preventDefault();

      $.ajaxSetup({
      headers: { 'X-User-Token': '3yq_t266PYjyRoBHy-yX', 'X-User-Email': 'frank@ex.com'
        }
      });

      $.ajax({
        url: "https://tutorial-api.herokuapp.com/tutorials.json",
        type: "GET",
        dataType: "json",
        succes: function(data) {
          JSON.stringify(data)
          console.log(data)
        },

        fail: function(error){
          console.log(error)
        }
    });
  }





    render() {
        return (
          <div>
            <div>
              <form onSubmit={this.loginUser.bind(this)}>
                  <input type="text" ref="email" hintText ="Email" />
                  <input type="text" ref="password" hintText ="Password"/>
                  <button>Login</button>
              </form>
            </div>
            <div>
              <button onClick={this.logoutUser.bind(this)}> Logout </button>
            </div>
            <div>
              <button onClick={this.getTutorials.bind(this)}> Get Tutorials </button>
            </div>
          </div>
        );
    }
}

export default Login;
