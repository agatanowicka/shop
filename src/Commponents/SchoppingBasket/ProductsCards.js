
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
                            <Col xs={6} s={6} md={6} lg={6} style={{padding:'0px'}}>
                                <Card.Img variant="top" src={product.images} style={{height:'100%', width:'100%'}}/>
                            </Col>
                            <Col  xs={6} s={6} md={6} lg={6} >
                                <Card.Body className='schoppingBasketCardBody'>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Size: {product.size}</Card.Text>
                                    <Card.Text>Price: {product.price}</Card.Text>
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