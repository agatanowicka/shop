import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { required, lt, email } from '../../validation/validators';
import { Redirect } from 'react-router-dom';
import Authorization from '../Authorization'

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
            }
        }
    }
    changeHandler = (input, value) => {
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
        if (this.props.redirect && this.state.formIsValid) {
            return <Redirect to="/" />
        }
        return (
            <Authorization>
                <Form onSubmit={e =>
                    this.props.onLogin(e, {
                        email: this.state.loginForm.email.value,
                        password: this.state.loginForm.password.value
                    })
                } className="loginForm">
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
                    <Button onClick={this.checkAllForm} className="loginButton" variant="dark" type="submit"  >Log In</Button>
                    <Form.Label className="validMessage">{this.props.errMessage}</Form.Label>
                </Form>
                </Authorization>
        )
    }

}
export default LoginForm