import React, { Component,   useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { updateProductsInBasket } from '../../actions/productsInBasketActions';
import { connect } from 'react-redux';

const ChooseSizeButton = ({dispatch}) => {
    const createNewOrder = (event) => {
        event.preventDefault();
        debugger
        dispatch(updateProductsInBasket(
            {
                name: "props.name",
                price: "props.price",
                size: "1",
                productId: "props.productId"
            }
        ))
        // this.setState({
        //     product: {
        //         name: this.props.name,
        //         price: this.props.price,
        //         size: this.state.size,
        //         productId: this.props.productId
        //     }
        // })
        // this.updateProductsInBasket()
    }
        return (
            <div >
                <Form onSubmit={createNewOrder}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Control as="select" custom>
                            
                    >
                        
                    </Form.Control>
                    </Form.Group>
                    <Button variant="dark" className="shoppingCartButton" type='submit'><h5 className="buttonHeading" >Add to card <FaShoppingCart />  </h5> </Button>
                </Form>
            </div>
        )

}


export default connect()(ChooseSizeButton);