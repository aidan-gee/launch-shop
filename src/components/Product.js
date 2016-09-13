import React from 'react';
import initialState from '../services/initialData';
import {startApplePaySession} from '../services/applePay';
import SimpleButton from './SimpleButton';

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
    let applePayButton;
    if(true) {
      applePayButton = <SimpleButton className="applePay black" onClick={startApplePaySession}></SimpleButton>
    }
    return  (
      <div className="Product">
        <h1>{this.state.product.title}</h1>
        {applePayButton}
        <SimpleButton className="buyNow black">Buy now</SimpleButton>
      </div>
    );
  }

});


export default Product;
