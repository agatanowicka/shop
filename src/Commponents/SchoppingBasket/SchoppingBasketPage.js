import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductFromBusket } from '../../actions/productsInBasketActions';
import { deleteAllProductFromBusket, getProductsInBasket } from '../../actions/productsInBasketActions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillDelete } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const deleteProduct = (dispatch, index) => {
  dispatch(deleteProductFromBusket(index))
};
const deleteAllProducts = (dispatch) => {
  dispatch(deleteAllProductFromBusket())
};
class SchoppingBasketPage extends Component {
  constructor(props) {
    super(props);
    const toPay = this.sumAllPrices(this.props.productsInBasket);
    const productsIdAndSize = this.allIdAndSize(this.props.productsInBasket);
    this.state = {
      toPay,
      productsIdAndSize,
      message: ''
    }
  }
  handler = (event, index) => {
    event.preventDefault();
    deleteProduct(this.props.dispatch, index);
    window.location.reload();
  }
  deleteAll = (event) => {
    event.preventDefault();
    deleteAllProducts(this.props.dispatch);
    window.location.reload();
  }
  allIdAndSize = (products) => {
    let allIdAndSize = []
    products.forEach(
      product =>
        allIdAndSize.push({ productId: product.productId, size: product.size, quantity: 1 })
    )
    return allIdAndSize;
  }
  createNewOrder = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    fetch('http://localhost:8080/order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
        products: this.state.productsIdAndSize
      })
    })
      .then(res => {
        if (res.status > 210) {
          throw new Error('wrong status');
        }
        this.setState({ message: 'Your order has been sent!' });
        this.deleteAll(event);
        return res.json();
      })
      .catch(err => {
        this.setState({ message: 'Creating a order failed!' });
      });

  }
  sumAllPrices = (products) => {
    let allPrice = 0;
    products.forEach(product => {
      allPrice = allPrice + product.price
    })
    return allPrice;
  }
  renderProducts = () => {
    return (
      this.props.productsInBasket.map((product, index) => {
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
                      onClick={(event) => this.handler(event, index)}
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
  render() {
    return (
      <div>
        {this.state.productsIdAndSize.length > 0 ?
          <Container className='shoppingBusketContainer'>
            <Row>
              <Col sm={12} md={6} className='productsAndButtonCol'>
                {this.renderProducts()}
                {this.state.productsIdAndSize.length > 0 ? <Button
                  variant="dark"
                  className='deleteAllProductsButton'
                  onClick={this.deleteAll.bind()}>
                  Delete all products
            </Button> : ''}
              </Col>
              <Col sm={12} md={6} className='toPayCol'>
                <div className='toPayDiv'>
                  <h4 className='toPayHeading'>To pay</h4>
                  <h4 className='toPayHeading'>{this.state.toPay}</h4>
                  {this.props.isAuth ?
                    <Button className='toPayButton' variant="dark" onClick={this.createNewOrder.bind()}>
                      Submit your order
            </Button>
                    : <Button className='toPayButton' variant="dark" href='http://localhost:3000/Login'>
                      Login
                </Button>}
                  <h6 className='messageAboutSentOrder'>{this.state.message}</h6>
                </div>  </Col>
            </Row>
          </Container> :<Container fluid><Row><Col className='videoCol'> <video className='videoTag' autoPlay loop muted> <source src="/images/emptySchoppingCart2.mp4" type="video/mp4" /></video></Col>
            </Row>
          </Container>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    productsInBasket: state.productsInBasket.productsInBasket,
  }
}
export default connect(mapStateToProps)(SchoppingBasketPage)