import React, { Component } from 'react';
import { required } from '../../validation/validators';
import { Redirect } from 'react-router-dom';
import createNewCardMenu from './createNewCardMenu';
import AllForm from './AllForm';

class CardMenuForm extends Component {

    constructor(props) {
        const initFormInputState = {
            value: '',
            valid: false,
            validators: [required],
            validationMessage: ""
        };
        const token = localStorage.getItem('token');
        super(props);
        this.state = {
            cardMenuForm: {
                image: { ...initFormInputState },
                title: { ...initFormInputState },
                type: { ...initFormInputState },
            },
            formIsValid: false,
            redirect: false,
            messageFromBackend: '',
            token: token

        };
    }
    createCard = async (event) => {
        event.preventDefault();
        const isCreationSuccesfull = await createNewCardMenu(this.state);
        if (isCreationSuccesfull) {
            this.setState({
                messageFromBackend: 'Card menu is created!',
                redirect: true
            })
        } else {
            this.setState({
                messageFromBackend: 'The card menu has not been created!',
            })
        }
    }
    changeHandler = (input, value) => {
        this.setState(prevState => {
            let isValid = true;
            let validationValue = true;
            let validatorMessage;
            for (const validator of prevState.cardMenuForm[input].validators) {
                if (validator(value) !== "") {
                    validationValue = false;
                    validatorMessage = validator(value);
                    break;
                }
            }
            isValid = isValid && validationValue;

            const updatedForm = {
                ...prevState.cardMenuForm,
                [input]: {
                    ...prevState.cardMenuForm[input],
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
                cardMenuForm: updatedForm,
                formIsValid: formIsValid
            };
        });
    }
    checkAllForm = () => {
        this.setState(prevState => {
            for (const input in prevState.cardMenuForm) {
                const item = this.state.cardMenuForm[input];
                if (!item.valid) {
                    item.validationMessage = 'This input must be filled out'
                }
            }
        })
    }
    render() {
        if (this.state.redirect && this.state.formIsValid) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <AllForm
                    state={this.state}
                    checkAllForm={this.checkAllForm}
                    changeHandler={this.changeHandler}
                    onSubmit={(event) => this.createCard(event)}
                />
            </div>
        )
    }
}
export default CardMenuForm