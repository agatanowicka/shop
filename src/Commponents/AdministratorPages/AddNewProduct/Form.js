import React from 'react';
import Form from 'react-bootstrap/Form';
import SelectInput from './SelectInput';
import Images from './Images';
import Button from 'react-bootstrap/Button';
import Input from '../../Input';
import inputsData from './inputData';
import SizeAndQuantity from './SizeAndQuantity';

function AllForm(props) {
    return (
        <Form className='newProductForm' onSubmit={props.onSubmit} >
            <Images
                imagesChangeCallback={props.imagesChangeCallback}
            />
            <SelectInput
                label={'Type'}
                onClick={props.typeChangeHandler}
                onChange={props.typeChangeHandler}
                data={props.state.types}
                value={props.state.type}
            />
            {inputsData.map(input => {
                return (
                    <Input
                        type={input.type}
                        label={input.label}
                        onChange={(e) => props.changeHandler(`${input.title}`, e.target.value)}
                        value={props.state.newProductForm[`${input.title}`].value}
                        isValid={props.state.newProductForm[`${input.title}`].valid}
                        validationMessage={props.state.newProductForm[`${input.title}`].validationMessage}
                        min={input.min}
                        key={input.id}
                    />
                )
            })}
            <SizeAndQuantity
                updateCallback={props.addSizeAndQuantityCallback}
            />
            <Button
                onClick={props.checkAllForm}
                className="newProductFormButton"
                variant="dark"
                type="submit"
            >
                Create new card
            </Button>
            <Form.Label>{props.state.messageFromBackend}</Form.Label>
        </Form>
    )
}
export default AllForm