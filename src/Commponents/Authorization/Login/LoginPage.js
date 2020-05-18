import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import CreateAnAccountButton from "./CreateAnAccountButton";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            
        }
    }
    loginHandler = (event, authData) => {
        event.preventDefault();
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: authData.email,
                password: authData.password
            })
        })
            .then(res => {
                if (res.status === 422) {
                    console.log("Validation failed. Make sure the email address isn't used yet!");
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Could not authenticate you!');
                }
                return res.json();
            })
            .then(resData => {
                this.setState({
                    redirect: true
                })
                localStorage.setItem('token', resData.token);
                localStorage.setItem('userId', resData.userId);
                if (resData.token) {
                    localStorage.setItem('isAuth', true);
                    if(resData.isAdministrator){
                        localStorage.setItem('isAdministrator', true);
                    }
                } else {
                    localStorage.setItem('isAuth', false);
                }
                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem('expiryDate', expiryDate.toISOString());
                this.setAutoLogout(remainingMilliseconds);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    };
    setAutoLogout = milliseconds => {
        setTimeout(() => {
            this.logoutHandler();
        }, milliseconds);
    };
    logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdministartor');
        localStorage.removeItem('expiryDate');
        this.setState({
            redirect: false
        })
    };
    render() {
        return (
            <div className="loginPage">
                <LoginForm onLogin={this.loginHandler}
                    redirect={this.state.redirect} />
                <CreateAnAccountButton />
            </div>
        )
    }

}
export default LoginPage