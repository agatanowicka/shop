import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { required } from '../validation/validators';
import { Redirect } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'; import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

class CardMenuForm extends Component {

    constructor(props) {
        super(props);
        this.getTypes();
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
            image: '',
            images: [],
            formIsValid: false,
            redirect: false,
            isAuth: false,
            isAdministrator: false,
            type: '',
            types: [],
            sizeAndQuantity: [],
            quantity: '',
            size: "",
            sizeAndQuantityErrMessage: ''
        };
    }
    debugger;
    createNewProduct = (event) => {
        event.preventDefault();
        debugger;
        fetch('http://localhost:8080/colection/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                images: this.state.images,
                type: this.state.type,
                name: this.state.newProductForm.name.value,
                color: this.state.newProductForm.color.value,
                price: this.state.newProductForm.price.value,
                fabric: this.state.newProductForm.fabric.value,
                typeOfMaterial: this.state.newProductForm.typeOfMaterial.value,
                careTips: this.state.newProductForm.careTips.value,
                details: this.state.newProductForm.details.value,
                productNumber: this.state.newProductForm.productNumber.value,
                sizeAndQuantity: this.state.sizeAndQuantity,
            })
        })
            .then(res => {
                if (res.status === 422) {
                    console.log("Validation failed. Make sure the email address isn't used yet!");
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Creating a product failed!');
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
    getTypes = () => {
        debugger;
        fetch('http://localhost:8080/cardMenu/', { method: 'GET' })
            .then(res => {
                debugger;
                if (res.status !== 200) {
                    return alert('Failed to fetch status')
                }
                return res.json();
            })
            .then(resData => {
                debugger
                const types = resData.map(card =>
                    card.type
                );
                this.setState({
                    types
                })


            })
            .catch(err => {
                console.log(err);
            })
    }
    changeHandler = (input, value) => {
        debugger;
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
            debugger
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
            debugger
            return {
                newProductForm: updatedForm,
                formIsValid: formIsValid
            };
        });
    }
    checkAllForm = () => {
        debugger;
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
        debugger
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
    addSizeAndQuantity = () => {
        let errMessage;
        if (this.state.size !== '' && this.state.quantity !== "") {
            debugger
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
                <Form className='newProductForm' onSubmit={this.createNewProduct} >
                    <Form.Group>
                        <Container>
                            <Row>
                                {this.state.images.map(item => {
                                    return (<Col md={1}>
                                        <Image src={item} rounded style={{ width: '50px', height: '60px' }} />
                                    </Col>)
                                })}
                            </Row>
                        </Container>
                        <Form.Label>Image</Form.Label>
                        <Container style={{ width: '100%' }}>
                            <Row >
                                <Col sm={8} style={{ padding: '0px' }}>   <Form.Control
                                    type="text"
                                    placeholder="Image"
                                    onChange={this.imageChangeHandler}
                                    value={this.state.image}
                                    style={{ width: '100%' }}
                                />
                                </Col>
                                <Col sm={4} style={{ paddingRight: '0px' }} >
                                    <Button onClick={this.addImage} style={{ width: '100%', backgroundColor: '#E7B2A5', borderColor: 'rgb(240, 130, 198)', borderWidth: '2px' }} variant="primary" >Add image</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" custom>
                            {this.state.types.map(option => {
                                debugger
                                return (
                                    <option>{option}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            onChange={(e) => this.changeHandler('name', e.target.value)}
                            value={this.state.newProductForm['name'].value}
                            isValid={this.state.newProductForm['name'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.newProductForm.name.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Color"
                            onChange={(e) => this.changeHandler('color', e.target.value)}
                            value={this.state.newProductForm.color.value}
                            isValid={this.state.newProductForm['color'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.newProductForm.color.validationMessage}</Form.Label>

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            onChange={(e) => this.changeHandler('price', e.target.value)}
                            value={this.state.newProductForm['price'].value}
                            isValid={this.state.newProductForm['price'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.newProductForm.price.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Fabric</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="fabric"
                            onChange={(e) => this.changeHandler('fabric', e.target.value)}
                            value={this.state.newProductForm['fabric'].value}
                            isValid={this.state.newProductForm['fabric'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.newProductForm.fabric.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type of material</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Type of material"
                            onChange={(e) => this.changeHandler('typeOfMaterial', e.target.value)}
                            value={this.state.newProductForm['typeOfMaterial'].value}
                            isValid={this.state.newProductForm['typeOfMaterial'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.newProductForm.typeOfMaterial.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Care Tips</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Care tips"
                            onChange={(e) => this.changeHandler('careTips', e.target.value)}
                            value={this.state.newProductForm['careTips'].value}
                            isValid={this.state.newProductForm['careTips'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.newProductForm.careTips.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Details"
                            onChange={(e) => this.changeHandler('details', e.target.value)}
                            value={this.state.newProductForm['details'].value}
                            isValid={this.state.newProductForm['details'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.newProductForm.details.validationMessage}</Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Product number"
                            onChange={(e) => this.changeHandler('productNumber', e.target.value)}
                            value={this.state.newProductForm['productNumber'].value}
                            isValid={this.state.newProductForm['productNumber'].valid}
                        />
                        <Form.Label className="validMessage">{this.state.newProductForm.productNumber.validationMessage}</Form.Label>
                    </Form.Group>
                    <Container style={{ width: '100%' }}>
                        <Row >
                            <Col sm={4} style={{ padding: '0px' }}>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control as="select" custom
                                        onChange={this.sizeChangeHandler}
                                        value={this.state.size}>
                                        <option>xs</option>
                                        <option>s</option>
                                        <option>m</option>
                                        <option>l</option>
                                        <option>xl</option>
                                        <option>xxl</option>
                                        <option>xxxl</option>
                                        <option>32</option>
                                        <option>34</option>
                                        <option>36</option>
                                        <option>38</option>
                                        <option>40</option>
                                        <option>42</option>
                                        <option>44</option>
                                        <option>37</option>
                                        <option>38</option>
                                        <option>39</option>
                                        <option>40</option>
                                        <option>41</option>
                                        <option>one size</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col sm={4} style={{ paddingRight: '0px' }} >
                                <Form.Group >
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantity"
                                        onChange={this.quantityChangeHandler}
                                        value={this.state.quantity}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={4} style={{ marginTop: '30px', paddingRight: '0px' }} >
                                <Button onClick={this.addSizeAndQuantity} style={{ width: '100%', backgroundColor: '#E7B2A5', borderColor: 'rgb(240, 130, 198)', borderWidth: '2px' }} variant="primary" >Add size and quantity</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Form.Label className="validMessage">{this.state.sizeAndQuantityErrMessage}</Form.Label>
                    {this.state.sizeAndQuantity.length !== 0 ?
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            {this.state.sizeAndQuantity.map(item => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{item.size}</td>
                                            <td>{item.quantity}</td>
                                        </tr>
                                    </tbody>

                                )
                            })}
                        </Table>
                        : ''
                    }

                    <Button onClick={this.checkAllForm} className="newProductFormButton" variant="dark" type="submit">Create new card</Button>
                </Form>
            </div>
        )
    }

}
export default CardMenuForm