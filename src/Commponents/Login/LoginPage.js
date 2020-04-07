import React, { Component } from 'react';
 import LoginForm from "./LoginForm";
 import CreateAnAccountButton from "./CreateAnAccountButton";

 class LoginPage extends Component {
    render() {
        return (
            <div className="loginPage">
                <LoginForm />
               <CreateAnAccountButton />
            </div>
        )
    }

}
export default LoginPage