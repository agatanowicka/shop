import React, { Component } from 'react';
import { required } from '../validation/validators';
import { Redirect } from 'react-router-dom';
import AllForm from '../CardMenuForm/AllForm';
import editCardMenu from './editCardMenu';

const initFormInputState = {
    value: '',
    valid: true,
    validators: [required],
    validationMessage: "",
};

class EditCardMenuForm extends Component {
    constructor(props) {
        super(props);
        let cardMenu;
        if (this.props.location.state) {
            cardMenu = this.props.location.state.cardMenu;
        }
        const token = localStorage.getItem('token');
        this.state = {
            formIsValid: true,
            redirect: false,
            types: [],
            messageFromBackend: '',
            token: token
        };
        if (cardMenu) {
            this.state = {
                cardMenuForm: {
                    image: { ...initFormInputState, value: cardMenu.image },
                    title: { ...initFormInputState, value: cardMenu.title },
                    type: { ...initFormInputState, value: cardMenu.type },
                }
            }
            this.state.cardMenuId = cardMenu._id;
        }
    }
    editCard = async (event) => {
        event.preventDefault();
        const updatedCard = await editCardMenu(this.state);
        if (updatedCard) {
            this.setState({
                redirect: true
            })
        } else {
            this.setState({
                messageFromBackend: "Card can't be update!"
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
                    onSubmit={this.editCard}
                    btnTitle={' Edit this card'}
                />
            </div>
        )
    }
}
export default EditCardMenuForm