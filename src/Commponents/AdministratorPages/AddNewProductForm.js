import React, { Component } from 'react';
import { required } from '../validation/validators';
import { Redirect } from 'react-router-dom';
import createNewProduct from './createNewProduct';
import getClothesTypes from '../GetClothesTypes';
import AllForm from './Form';

class CardMenuForm extends Component {

    constructor(props) {
        super(props);
        let types = this.props.getTypes;
        this.state = {
            newProductForm: {
                name: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
                color: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
                price: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
                fabric: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
                typeOfMaterial: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
                careTips: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
                details: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
                productNumber: {
                    value: '',
                    valid: false,
                    validators: [required],
                    validationMessage: ""
                },
            },
            formIsValid: false,
            redirect: false,
            isAuth: false,
            isAdministrator: false,
            type: '',
            types: [],
            sizeAndQuantity: [],
            quantity: '',
            size: "",
            sizeAndQuantityErrMessage: '',
            image:'',
            images:[]
        };
    }
    createProduct = async () => {
        await createNewProduct();
        this.setState({
            redirect: true
        })
    }
    getData = async () => {
        const types = await getClothesTypes();
        const allTypes = [];
        types.map(type =>
            allTypes.push({ option: type }))
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
    imageChangeHandler = (event) => {
        this.setState({
            image: event.target.value
        })
    }
    addImage = () => {
        if (this.state.image !== '') {
            this.state.images.push(this.state.image)
            this.setState({
                image: ''
            })
        }
    }
    quantityChangeHandler = (event) => {
        this.setState({
            quantity: Math.floor(event.target.value)
        })
    }
    sizeChangeHandler = (event) => {
        this.setState({
            size: event.target.value
        })
    }
    typeChangeHandler = (event) => {
        this.setState({
            type: event.target.value
        })
    }
    addSizeAndQuantity = () => {
        let errMessage;
        if (this.state.size !== '' && this.state.quantity !== "") {
            let thisSizeExist = false;
            for (let i = 0; i < this.state.sizeAndQuantity.length; i++) {
                if (this.state.sizeAndQuantity[i].size === this.state.size) {
                    thisSizeExist = true;
                    errMessage = 'This size has already been added';
                    this.setState({
                        sizeAndQuantityErrMessage: errMessage
                    })
                }
            }
            if (!thisSizeExist) {
                this.state.sizeAndQuantity.push({ size: this.state.size, quantity: this.state.quantity })
                this.setState({
                    quantity: '',
                    sizeAndQuantityErrMessage: ''
                })
            }
        } else {
            errMessage = 'Size and quantty must be filled out';
            this.setState({
                sizeAndQuantityErrMessage: errMessage
            })
        }

    }
    render() {
        if (this.state.redirect && this.state.formIsValid) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <AllForm
                    state={this.state}
                    quantityChangeHandler={this.quantityChangeHandler}
                    sizeChangeHandler={this.sizeChangeHandler}
                    typeChangeHandler={this.typeChangeHandler}
                    addSizeAndQuantity={this.addSizeAndQuantity}
                    checkAllForm={this.checkAllForm}
                    changeHandler={this.changeHandler}
                    onSubmit={(event) => { this.createProduct() }}
                    addImage={this.addImage}
                    imageChangeHandler={this.imageChangeHandler}
                />
            </div>
        )
    }
}

export default CardMenuForm