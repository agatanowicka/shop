import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAllProductFromBusket, getProductsInBasket } from '../../actions/productsInBasketActions';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import createNewOrder from './createNewOrder';
import ProductsCards from './ProductsCards';

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
  createOrder = async (event) => {
    event.preventDefault();
    const orderCreated = await createNewOrder(this.state.productsIdAndSize);
    if (orderCreated) {
      this.setState({ message: 'Your order has been sent!' });
      this.deleteAll(event);
    }
    else {
      this.setState({ message: 'Creating a order failed!' });
    }
  }
  sumAllPrices = (products) => {
    let allPrice = 0;
    products.forEach(product => {
      allPrice = allPrice + product.price
    })
    return allPrice;
  }
 
  render() {
    return (
      <div>
        {this.state.productsIdAndSize.length > 0 ?
          <Container className='shoppingBusketContainer'>
            <Row>
              <Col sm={12} md={6} className='productsAndButtonCol'>
               <ProductsCards productsInBasket={this.props.productsInBasket} />
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
                    <Button className='toPayButton' variant="dark" onClick={(event)=>this.createOrder(event)}>
                      Submit your order
            </Button>
                    : <Button className='toPayButton' variant="dark" href='http://localhost:3000/Login'>
                      Login
                </Button>}
                  <h6 className='messageAboutSentOrder'>{this.state.message}</h6>
                </div>  </Col>
            </Row>
          </Container> : <Container fluid><Row><Col className='videoCol'> <video className='videoTag' autoPlay loop muted> <source src="/images/emptySchoppingCart2.mp4" type="video/mp4" /></video></Col>
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