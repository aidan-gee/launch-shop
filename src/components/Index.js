import React from 'react';
import './App.css';
import ProductList from './ProductList';
import NotificationBar from './NotificationBar';
import {canMakePaymentsWithActiveCard} from '../services/applePay';
import initialState from '../services/initialData';


const Index = React.createClass({
  getInitialState(){
    return initialState;
  },
  componentWillMount(){
 
    canMakePaymentsWithActiveCard()
    .then((canMakePayments) => {
       if (canMakePayments){
         this.setState({applePay: true})
       }
    });

  },
  render(){

    return  (
      <div className="App">
        <NotificationBar notification={this.state.notification.message} countdown={this.state.notification.countdownTime} show={true}/>
        {this.props.children}
        <ProductList products={this.state.products} applePay={this.state.applePay}/>
      </div>
    );
  }

})



export default Index;
