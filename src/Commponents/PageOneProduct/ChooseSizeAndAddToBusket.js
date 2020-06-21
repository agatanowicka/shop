import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateProductsInBasket } from '../../actions/productsInBasketActions';
import Dropdown from 'react-bootstrap/Dropdown'

const addToBusket = (dispatch, props, size) => {
    dispatch(updateProductsInBasket(
        {
            name: props.name,
            price: props.price,
            productId: props.productId,
            size: size,
            images: props.images
        }
    ))
};

class ChooseSizeAndAddToBusket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: '',
            chooseSize: 'Choose size',
            message: ''
        }

        this.timer = null;
        this.handler = (event) => {
            event.preventDefault();
            if (this.state.size !== '') {
                addToBusket(this.props.dispatch, this.props, this.state.size);
                this.setState({
                    message: 'Your order has been added to the shopping cart.'
                })
                this.timer = setTimeout(() => this.resetMessage()
                    , 2000)
            } else {
                this.setState({
                    message: 'You must select a size.'
                })
                this.timer = setTimeout(() => this.resetMessage()
                    , 2000)
            }
        }
    }

    resetMessage = () => {
        this.setState({
            message: '',
            chooseSize: 'Choose size'
        })
    }
    sizeChangeHandler = (event) => {
        this.setState({
            size: event.target.innerHTML,
            chooseSize: event.target.innerHTML
        })
    }
    render() {
        return (<div >
            <Form onSubmit={this.handler}>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Dropdown>
                        <Dropdown.Toggle
                            variant='Secondary'
                            id="dropdown-basic"
                            style={{ backgroundColor: '#E7B2A5', borderWidth: '1px', borderColor: 'rgb(240, 130, 198)', width: "100%" }}
                        >
                            <h5 className='chooseSizeButton'>{this.state.chooseSize}</h5>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.props.sizes.map((size, index) => {
                                return (
                                    <Dropdown.Item
                                        onClick={this.sizeChangeHandler} key={index}>
                                        {size}
                                    </Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Button
                    variant="dark"
                    className="shoppingCartButton"
                    type='submit'>
                    <h5 className="buttonHeading" >Add to card <FaShoppingCart /> </h5>
                </Button>
                <h5 className='addToShoppingCartInfo'> {this.state.message}</h5>
            </Form>
        </div>)
    }
}

export default connect()(ChooseSizeAndAddToBusket);