import React, { Component } from 'react';
import { required } from '../../validation/validators';
import { Redirect } from 'react-router-dom';
import createNewProduct from './createNewProduct';
import getClothesTypes from '../../getClothesTypes';
import AllForm from './Form';

class NewProductForm extends Component {

    constructor(props) {
        const initFormInputState = {
            value: '',
            valid: false,
            validators: [required],
            validationMessage: ""
        };
        super(props);
        this.getData();
        const token = localStorage.getItem('token');
        this.state = {
            newProductForm: {
                name: { ...initFormInputState },
                color: { ...initFormInputState },
                price: { ...initFormInputState },
                fabric: { ...initFormInputState },
                typeOfMaterial: { ...initFormInputState },
                careTips: { ...initFormInputState },
                details: { ...initFormInputState },
                productNumber: { ...initFormInputState }
            },
            formIsValid: false,
            redirect: false,
            type: '',
            types: [],
            sizeAndQuantity: [],
            images: [],
            messageFromBackend: '',
            token: token,
        };
    }
    createProduct = async (event) => {
        debugger
        event.preventDefault();
        const isCreationSuccesfull = await createNewProduct(this.state);
        if (isCreationSuccesfull) {
            this.setState({
                messageFromBackend: 'Product is created!',
                redirect: true
            })
        } else {
            this.setState({
                messageFromBackend: 'The product has not been created!',
            })
        }
    }

    getData = async () => {
        const types = await getClothesTypes();
        const allTypes = [];
        types.map(type =>
            allTypes.push({ option: type.type }))
        this.setState({
            types: allTypes
        })
    }

    changeHandler = (input, value) => {
        this.setState(prevState => {
            let isValid = true;
            let validationValue = true;
            let validatorMessage;
            for (const validator of prevState.newProductForm[input].validators) {
                if (validator(value) !== "") {
                    validationValue = false;
                    validatorMessage = validator(value);
                    break;
                }
            }
            isValid = isValid && validationValue;
            const updatedForm = {
                ...prevState.newProductForm,
                [input]: {
                    ...prevState.newProductForm[input],
                    valid: isValid,
                    value: value,
                    validationMessage: validatorMessage
                }
            };
            let formIsValid = true;
            for (const inputName in updatedForm) {
                debugger
                formIsValid = formIsValid && updatedForm[inputName].valid;
            }
            return {
                newProductForm: updatedForm,
                formIsValid: formIsValid
            };
        });
    }
    checkAllForm = () => {
        this.setState(prevState => {
            for (const input in prevState.newProductForm) {
                const item = this.state.newProductForm[input];
                if (!item.valid) {
                    item.validationMessage = 'This input must be filled out'
                }
            }
        })
    }
    typeChangeHandler = (event) => {
        this.setState({
            type: event.target.value
        })
    }
    imagesChangeState = (images) => {
        this.setState({
            images
        })
    }
    sizeAndQuantitChangeState = (sizeAndQuantity) => {
        this.setState({
            sizeAndQuantity
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
                    imagesChangeCallback={this.imagesChangeState}
                    typeChangeHandler={this.typeChangeHandler}
                    addSizeAndQuantityCallback={this.sizeAndQuantitChangeState}
                    checkAllForm={this.checkAllForm}
                    changeHandler={this.changeHandler}
                    onSubmit={(event) => this.createProduct(event)}
                    addImage={this.addImage}
                />
            </div>
        )
    }
}

export default NewProductForm