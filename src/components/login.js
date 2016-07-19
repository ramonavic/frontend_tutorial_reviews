import React from 'react';

class Login extends React.Component {

    loginUser(event) {
      event.preventDefault();
      let component = this
      let email = this.refs.email.value
      let password = this.refs.password.value

      console.log("Email: ", email, "Password: ", password)
    }


    render() {
        return (
          <div>
            <form onSubmit={this.loginUser.bind(this)}>
                <input type="text" ref="email" hintText ="Email" />
                <input type="text" ref="password" hintText ="Password"/>
                <button>Login</button>
            </form>
          </div>
        );
    }
}

export default Login;
