import React from 'react';
import { connect } from 'react-redux';
import { ProductCard } from '../SchoppingBasket/ProductCard';

const SchoppingBasketPage = ({ productsInBasket }) => {

  const renderProducts = () => {
    return productsInBasket.map(product => <ProductCard key={product.id} product={product} />)
  }
  return (
    <section>
      {renderProducts()}
    </section>
  )
}

const mapStateToProps = state => { 
  debugger;
  return {
  productsInBasket: state.productsInBasket.productsInBasket,
}
}
export default connect(mapStateToProps)(SchoppingBasketPage)