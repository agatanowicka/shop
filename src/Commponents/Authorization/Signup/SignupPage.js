import React, { Component } from 'react';
import SignupForm from "./SignupForm";
import { required, lt, email, password } from '../../validation/validators';
import { Redirect } from 'react-router-dom';
import createNewAccount from './createNewAccount';

class SignupPage extends Component {
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
            redirect: false,
            messageFromBackend: ''
        };
    }
    createAccount = async (event) => {
        event.preventDefault();
        const isCreationSuccesfull = await createNewAccount(this.state);
        if (isCreationSuccesfull) {
            this.setState({
                messageFromBackend: 'Account is created!',
                redirect: true
            })
        } else {
            this.setState({
                messageFromBackend: 'The account has not been created!',
            })
        }
    }
    changeHandler = (input, value) => {
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
            <div className="signupPage">
                <SignupForm
                    state={this.state}
                    onSubmit={(event) => this.createAccount(event)}
                    changeHandler={this.changeHandler}
                    checkAllForm={this.checkAllForm()} />
            </div>
        )
    }
}
export default SignupPage