import React, { PropTypes } from 'react';
import './ProductListItem.css';
import { Link } from 'react-router'

const ProductListItem = ({image, alt, title, applePay, id, price}) => {

	return (
		<li>
			<Link to={`/product/${id}`}>
				<img src={image} alt={alt}/>
			</Link>
			<h5 className="title">{title}</h5>
			<h5 className="price">{price.amount}</h5>
		</li>
	)
};

ProductListItem.propTypes = {
    image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default ProductListItem;
