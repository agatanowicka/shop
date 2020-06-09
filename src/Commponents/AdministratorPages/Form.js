import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SelectInput from './SelectInput';
import Images from './Images';
import Button from 'react-bootstrap/Button';
import Input from './Input';
import inputsData from './inputData';
import SizeAndQuantity from './SizeAndQuantity';

function AllForm(props) {
    return (
        <Form className='newProductForm' onSubmit={props.onSubmit} >
            <Images
                imageChangeHandler={props.imageChangeHandler}
                addImage={props.addImage}
                image={props.state.image}
                images={props.state.images}
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
                        type={"text"}
                        label={input.label}
                        onChange={(e) => props.changeHandler(`${input.title}`, e.target.value)}
                        value={props.state.newProductForm[`${input.title}`].value}
                        isValid={props.state.newProductForm[`${input.title}`].valid}
                        validationMessage={props.state.newProductForm[`${input.title}`].validationMessage}
                        key={input.id}
                    />
                )
            })}
            <SizeAndQuantity
                sizeChangeHandler={props.sizeChangeHandler}
                sizeValue={props.state.size}
                quantityChangeHandler={props.quantityChangeHandler}
                addSizeAndQuantity={props.addSizeAndQuantity}
                sizeAndQuantityErrMessage={props.state.sizeAndQuantityErrMessage}
                quantityValue={props.state.quantity}
                sizeAndQuantity={props.state.sizeAndQuantity}
            />
            <Button
                onClick={props.checkAllForm}
                className="newProductFormButton"
                variant="dark"
                type="submit"
            >
                Create new card
            </Button>
        </Form>
    )
}
export default AllForm