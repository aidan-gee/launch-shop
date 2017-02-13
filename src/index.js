import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Index from './components/Index';
import Product from './components/Product';
import Checkout from './components/Checkout';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

if ('serviceWorker' in navigator) {
  
  const register = require("serviceworker!./sw.js");
  register({ scope: '/' })
    .then(() => console.log('Service worker installed'))
    .catch(err => console.log('Could not install service worker', err));
    
}


ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="product/:id" component={Product}/>
        <Route path="checkout" component={Checkout}/>
      </Route>
    </Router>,
  document.getElementById('root')
);
