import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function SelectInput(props) {
    return (
        <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="select" custom
                onClick={props.onClick}
                onChange={props.onChange}
                value={props.value}
    >
    {props.data.map(option => {
                    return (
                        <option>{option.option}</option>
                    )
                })}
            </Form.Control>
        </Form.Group>
    )
}

export default SelectInput