import React from 'react';
import initialState from '../services/initialData';

const Checkout = React.createClass({
  getInitialState(){
    return initialState;
  },
  componentWillMount(){

  },
  render(){
    return  (
      <div className="Checkout">
        <h1>Checkout</h1>
      </div>
    );
  }

});


export default Checkout;
