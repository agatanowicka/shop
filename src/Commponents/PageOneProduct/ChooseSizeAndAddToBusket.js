import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateProductsInBasket } from '../../actions/productsInBasketActions';
import Dropdown from 'react-bootstrap/Dropdown'
const addToBusket = (dispatch, props, size) => {
    debugger
    dispatch(updateProductsInBasket(
        {
            name: props.name,
            price: props.price,
            size: size,
            productId: props.productId
        }
    ))
};
class ChooseSizeAndAddToBusket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: ''
        }
        this.handler = (event) => {
            event.preventDefault();
            addToBusket(this.props.dispatch, this.props, this.state.size);
        };
    }
    sizeChangeHandler = (event) => {
        debugger;
        this.setState({
            size: event.target.innerHTML
        })
    }
    render() {
        return (<div >
            <Form onSubmit={this.handler}>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic">
                            Choose size
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.props.sizes.map(size => {
                                return (
                                    <Dropdown.Item
                                        onClick={this.sizeChangeHandler}>
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
            </Form>
        </div>)
    }
}

export default connect()(ChooseSizeAndAddToBusket);