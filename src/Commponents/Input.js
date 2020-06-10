import React from 'react';
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
                    min={props.min}
                />
                <Form.Label className="validMessage">{props.validationMessage}</Form.Label>
            </Form.Group>
    )
}

export default Input