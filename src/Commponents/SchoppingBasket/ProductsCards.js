
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillDelete } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { deleteProductFromBusket } from '../../actions/productsInBasketActions';

function deleteProduct(dispatch, index) {
    dispatch(deleteProductFromBusket(index))
};

function ProductsCards(props) {

    function deleteOneProduct(event, index) {
        event.preventDefault();
        deleteProduct(props.dispatch, index);
        window.location.reload();
    }
    return (
        props.productsInBasket.map((product, index) => {
            return (
                <Card key={index} className='cardsInBusket'>
                    <Container>
                        <Row>
                            <Col >
                                <Card.Img variant="top" src={product.images} />
                            </Col>
                            <Col >
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.size}</Card.Text>
                                    <Card.Text>{product.quantity}</Card.Text>
                                    <Card.Text>{product.price}</Card.Text>
                                    <Button
                                        variant="dark"
                                        onClick={(event) => deleteOneProduct(event, index)}
                                    >
                                        <AiFillDelete />
                                    </Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card >)
        }))
}
export default connect()(ProductsCards)