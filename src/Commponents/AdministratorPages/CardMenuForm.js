import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { required } from '../validation/validators';
import { Redirect } from 'react-router-dom';



class CardMenuForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardMenuForm: {
                image: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: "",
                },
                title: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
                type: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                }
            },
            formIsValid: false,
            redirect: false,
        };
    }
    createNewCardMenu = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/cardMenu/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.props.token
            },
            body: JSON.stringify({
                image: this.state.cardMenuForm.image.value,
                title: this.state.cardMenuForm.title.value,
                type: this.state.cardMenuForm.type.value
            })
        })
            .then(res => {
                if (res.status === 422) {
                    console.log("Validation failed. Make sure the email address isn't used yet!");
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Creating a cardMenu failed!');
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                this.setState({ redirect: true });
            })
            .catch(err => {
                console.log(err);
            });
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
                <Form className='cardMenuForm' onSubmit={this.createNewCardMenu} >
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Image"
                            onChange={(e) => this.changeHandler('image', e.target.value)}
                            value={this.state.cardMenuForm.image.value}
                            isValid={this.state.cardMenuForm['image'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.cardMenuForm.image.validationMessage}</Form.Label>

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            onChange={(e) => this.changeHandler('title', e.target.value)}
                            value={this.state.cardMenuForm['title'].value}
                            isValid={this.state.cardMenuForm['title'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.cardMenuForm.title.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Type"
                            onChange={(e) => this.changeHandler('type', e.target.value)}
                            value={this.state.cardMenuForm['type'].value}
                            isValid={this.state.cardMenuForm['type'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.cardMenuForm.type.validationMessage}</Form.Label>
                    </Form.Group>
                    <Button onClick={this.checkAllForm} className="cardMenuFormButton" variant="dark" type="submit">Create new card</Button>
                </Form>
            </div>
        )
    }

}
export default CardMenuForm