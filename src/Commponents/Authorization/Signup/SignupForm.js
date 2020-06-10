import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Authorization from '../Authorization'
import Input from '../../Input';
import inputData from './inputData';

function SignupForm(props) {

    return (
        <Authorization>
            <Form onSubmit={props.onSubmit} >
                {inputData.map(input => {
                    return (
                        <Input
                            type={input.type}
                            label={input.label}
                            onChange={(e) => props.changeHandler(`${input.title}`, e.target.value)}
                            value={props.state.signupForm[`${input.title}`].value}
                            isValid={props.state.signupForm[`${input.title}`].valid}
                            validationMessage={props.state.signupForm[`${input.title}`].validationMessage}
                            key={input.id}
                        />
                    )
                })}
                <Button
                    onClick={props.checkAllForm}
                    className="signupButton"
                    variant="dark"
                    type="submit">
                    Create an account
                    </Button>
                <Form.Label>{props.state.messageFromBackend}</Form.Label>
            </Form>
        </Authorization>
    )

}
export default SignupForm
