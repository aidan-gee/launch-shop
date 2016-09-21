import React from 'react';
import initialState from '../services/initialData';
import {startApplePaySession, APPLE_PAY_SUPPORTED} from '../services/applePay';
import {startWebPay, WEB_PAY_SUPPORTED} from '../services/webPay';
import SimpleButton from './SimpleButton';
import './Product.css';

function getProductById(id){
  let product;
  initialState.products.forEach((val, i) => {
    if(val.id === +id){
      product = val;
    }
  })

  return product;

}

const Product = React.createClass({
  getInitialState(){
    return {
      product: {}
    }
  },
  componentWillMount(){

    this.setState({
      // route components are rendered with useful information, like URL params
      product: getProductById(this.props.params.id)
    })
  },
  render(){
    
    return  (
      <div className="Product">
        <h1>{this.state.product.title}</h1>
        <SimpleButton className="apple-pay-button apple-pay-button-black" onClick={startApplePaySession} show={APPLE_PAY_SUPPORTED}></SimpleButton>
        <SimpleButton className="webPay black" onClick={startWebPay} show={WEB_PAY_SUPPORTED}></SimpleButton>
      </div>
    );
  }

});


export default Product;
