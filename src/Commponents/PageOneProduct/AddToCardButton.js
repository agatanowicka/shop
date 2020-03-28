import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button'

class AddToCardButton extends Component {
    render() {
        return (
            <Button variant="dark" className="shoppingCartButton"><h5 className="buttonHeading" >Add to card <FaShoppingCart />  </h5> </Button>
        )
    }
}
export default AddToCardButton