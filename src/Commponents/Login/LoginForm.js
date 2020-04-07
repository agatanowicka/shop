import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { required, lt, email } from '../validation/validators';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                email: {
                    value: '',
                    valid: false,
                    validators: [required, email],
                    validationMessage: ""
                },
                password: {
                    value: '',
                    valid: false,
                    validators: [required, (v => lt(v, 8))],
                    validationMessage: "",
                }
            },
            authLoading: false,
            isAuth: false,
            token: '',
            userId: '',
            redirect:false
        }
    }

    loginHandler = (event) => {
        debugger;
        event.preventDefault();
        this.setState({ authLoading: true });
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.loginForm.email.value,
                password: this.state.loginForm.password.value
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
                console.log(resData);
                this.setState({
                    isAuth: true,
                    token: resData.token,
                    authLoading: false,
                    userId: resData.userId,
                    redirect: true
                });
                localStorage.setItem('token', resData.token);
                localStorage.setItem('userId', resData.userId);
                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem('expiryDate', expiryDate.toISOString());
                this.setAutoLogout(remainingMilliseconds);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isAuth: false,
                    authLoading: false
                });
            });
    };
    setAutoLogout = milliseconds => {
        setTimeout(() => {
            this.logoutHandler();
        }, milliseconds);
    };
    logoutHandler = () => {
        this.setState({ isAuth: false, token: null });
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
    };
    changeHandler = (input, value) => {
        debugger;
        this.setState(prevState => {
            let isValid = true;
            let validationValue = true;
            let validatorMessage;
            for (const validator of prevState.loginForm[input].validators) {
                if (validator(value) !== "") {
                    validationValue = false;
                    validatorMessage = validator(value);
                    break;
                }
            }
            isValid = isValid && validationValue;

            const updatedForm = {
                ...prevState.loginForm,
                [input]: {
                    ...prevState.loginForm[input],
                    valid: isValid,
                    value: value,
                    validationMessage: validatorMessage
                }
            };
            let formIsValid = true;
            for (const inputName in updatedForm) {
                formIsValid = formIsValid && updatedForm[inputName].valid;
            }
            return {
                loginForm: updatedForm,
                formIsValid: formIsValid
            };
        });
    }
    checkAllForm = () => {
        debugger;
        this.setState(prevState => {
            for (const input in prevState.loginForm) {
                const item = this.state.loginForm[input];
                if (!item.valid) {
                    item.validationMessage = 'This input must be filled out'
                }
            }
        })
    }

    render() {
        debugger
        if (this.state.redirect && this.state.formIsValid) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Form onSubmit={this.loginHandler} className="loginForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => this.changeHandler('email', e.target.value)}
                            value={this.state.loginForm['email'].value}
                            isValid={this.state.loginForm['email'].valid} />
                        <Form.Label className="validMessage">{this.state.loginForm.email.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.changeHandler('password', e.target.value)}
                            value={this.state.loginForm['password'].value}
                            isValid={this.state.loginForm['password'].valid} />
                        <Form.Label className="validMessage">{this.state.loginForm.password.validationMessage}</Form.Label>
                    </Form.Group>
                    <Button onClick={this.checkAllForm} className="loginButton" variant="dark" type="submit">Log In</Button>
                </Form>
            </div>
        )
    }

}
export default LoginForm