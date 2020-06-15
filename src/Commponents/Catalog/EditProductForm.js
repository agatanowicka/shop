import React, { Component } from 'react';
import { required } from '../validation/validators';
import { Redirect } from 'react-router-dom';
import getClothesTypes from '../getClothesTypes';
import ProductForm from '../ProductForm/ProductForm';
import editProduct from './editProduct';

const initFormInputState = {
    value: '',
    valid: true,
    validators: [required],
    validationMessage: ""
};
class EditProductForm extends Component {
    constructor(props) {
        super(props);
        let product;
        if (this.props.location.state) {
            product = this.props.location.state.product
            this.getData();
        }
        const token = localStorage.getItem('token');
        this.state = {
            formIsValid: true,
            redirect: false,
            types: [],
            messageFromBackend: '',
            token: token
        };
        if (product) {
            this.state.newProductForm = {
                name: { ...initFormInputState, value: product.name },
                color: { ...initFormInputState, value: product.color },
                price: { ...initFormInputState, value: product.price },
                fabric: { ...initFormInputState, value: product.fabric },
                typeOfMaterial: { ...initFormInputState, value: product.typeOfMaterial },
                careTips: { ...initFormInputState, value: product.careTips },
                details: { ...initFormInputState, value: product.details },
                productNumber: { ...initFormInputState, value: product.productNumber }
            }
            this.state.productId = product._id;
            this.state.type = product.type;
            this.state.images = product.images;
            this.state.sizeAndQuantity = product.sizeAndQuantity;
        }
    }

    updateProduct = async (event) => {
        event.preventDefault();
        const updatedProduct = await editProduct(this.state);
        if (updatedProduct) {
            this.setState({
                redirect: true
            })
        } else {
            this.setState({
                messageFromBackend: "Product can't be update!"
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
            images:images
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
                <ProductForm
                    state={this.state}
                    imagesChangeCallback={this.imagesChangeState}
                    typeChangeHandler={this.typeChangeHandler}
                    addSizeAndQuantityCallback={this.sizeAndQuantitChangeState}
                    checkAllForm={this.checkAllForm}
                    changeHandler={this.changeHandler}
                    onSubmit={this.updateProduct}
                    btnTitle={'Update product'}
                />
            </div>
        )
    }
}

export default EditProductForm