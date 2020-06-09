import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function Input(props) {
    return (
        <Form.Group >
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    type={props.type}
                    placeholder={props.label}
                    onChange={props.onChange}
                    value={props.value}
                    isValid={props.isValid}
                />
                <Form.Label className="validMessage">{props.validationMessage}</Form.Label>
            </Form.Group>
    )
}

export default Input