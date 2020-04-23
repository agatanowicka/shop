import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import CreateAnAccountButton from "./CreateAnAccountButton";

class LoginPage extends Component {
    render() {
        return (
            <div className="loginPage">
                <LoginForm onLogin={this.props.onLogin} loading={this.props.loading}
                    redirect={this.props.redirect} />
                <CreateAnAccountButton />
            </div>
        )
    }

}
export default LoginPage