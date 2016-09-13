import React, { PropTypes } from 'react';
import ProductListItem from './ProductListItem';
import './ProductList.css';

const ProductList = ({products, applePay}) => {

	  let productsList = products.map((product, i) => (
		  <ProductListItem key={product.id} id={product.id} image={product.image} alt={product.title} title={product.title} price={product.price} applePay={applePay}/>
	  ));

	  return (
	  	<ul className='productList'>
			 {productsList}
		  </ul>
	  )

}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ProductList;
