import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { required, lt, email, password } from '../validation/validators';
import { Redirect } from 'react-router-dom';



class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signupForm: {
                firstName: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: "",
                },
                lastName: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
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
                },
                confirmPassword: {
                    value: '',
                    valid: false,
                    validators: [required, v => password(v, this.state.signupForm.password)],
                    validationMessage: ""
                },
                address: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                }
            },
            formIsValid: false,
            isAuth: false,
            authLoading: false,
            redirect: false,
        };
    }
    debugger;
    createNewAccount = (event) => {
        event.preventDefault();
        debugger;
        const formData = this.state.signupForm;
        this.setState({ authLoading: true });
        fetch('http://localhost:8080/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: formData.firstName.value,
                lastName: formData.lastName.value,
                email: formData.email.value,
                password: formData.password.value,
                address: formData.address.value,
            })
        })
            .then(res => {
                if (res.status === 422) {
                    console.log("Validation failed. Make sure the email address isn't used yet!");
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Creating a user failed!');
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                this.setState({ isAuth: false, authLoading: false, redirect: true });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isAuth: false,
                    authLoading: false,
                });
            });
    }
    changeHandler = (input, value) => {
        debugger;
        this.setState(prevState => {
            let isValid = true;
            let validationValue = true;
            let validatorMessage;
            for (const validator of prevState.signupForm[input].validators) {
                if (validator(value) !== "") {
                    validationValue = false;
                    validatorMessage = validator(value);
                    break;
                }
            }
            isValid = isValid && validationValue;

            const updatedForm = {
                ...prevState.signupForm,
                [input]: {
                    ...prevState.signupForm[input],
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
                signupForm: updatedForm,
                formIsValid: formIsValid
            };
        });
    }
    checkAllForm = () => {
        debugger;

        this.setState(prevState => {
            for (const input in prevState.signupForm) {
                const item = this.state.signupForm[input];
                if (!item.valid) {
                    item.validationMessage = 'This input must be filled out'
                }
            }
        })
    }

    render() {
        if (this.state.redirect && this.state.formIsValid) {
            return <Redirect to="/Login" />
        }
        return (
            <div>
                <Form onSubmit={this.createNewAccount} >
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            id="firstName"
                            as='input'
                            type="text"
                            placeholder="First name"
                            onChange={(e) => this.changeHandler('firstName', e.target.value)}
                            value={this.state.signupForm['firstName'].value}
                            isValid={this.state.signupForm['firstName'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.signupForm.firstName.validationMessage}</Form.Label>

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Last name"
                            onChange={(e) => this.changeHandler('lastName', e.target.value)}
                            value={this.state.signupForm['lastName'].value}
                            isValid={this.state.signupForm['lastName'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.signupForm.lastName.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => this.changeHandler('email', e.target.value)}
                            value={this.state.signupForm['email'].value}
                            isValid={this.state.signupForm['email'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.signupForm.email.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.changeHandler('password', e.target.value)}
                            value={this.state.signupForm['password'].value}
                            isValid={this.state.signupForm['password'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.signupForm.password.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            onChange={(e) => this.changeHandler('confirmPassword', e.target.value)}
                            value={this.state.signupForm['confirmPassword'].value}
                            isValid={this.state.signupForm['confirmPassword'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.signupForm.confirmPassword.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            onChange={(e) => this.changeHandler('address', e.target.value)}
                            value={this.state.signupForm['address'].value}
                            isValid={this.state.signupForm['address'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.signupForm.address.validationMessage}</Form.Label>
                    </Form.Group>
                    <Button onClick={this.checkAllForm} className="signupButton" variant="dark" type="submit">Create an account</Button>
                </Form>
            </div>
        )
    }

}
export default SignupForm