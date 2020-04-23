import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button'

class ChooseSizeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: '',
            product: {}
        };
    }
    createNewOrder = (event) => {
        debugger
        this.setState({
            product: {
                name: this.props.name,
                price: this.props.price,
                size: this.state.size,
                productId: this.props.productId
            }
        })
    }
    sizeChangeHandler = (event) => {
        this.setState({
            size: event.target.value
        })
    }
    render() {
        return (
            <div >
                <Form onSubmit={this.createNewOrder}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Control as="select" custom
                            onClick={this.sizeChangeHandler}>
                            onChange={this.sizeChangeHandler}
                    >
                        {this.props.sizes.map(size => {
                                return (
                                    <option>{size}</option>)
                            })};
                    </Form.Control>
                    </Form.Group>
                    <Button variant="dark" className="shoppingCartButton" type='submit'><h5 className="buttonHeading" >Add to card <FaShoppingCart />  </h5> </Button>
                </Form>
            </div>
        )
    }

}
export default ChooseSizeButton