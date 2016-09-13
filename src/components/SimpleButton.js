import React, { PropTypes } from 'react';


const SimpleButton = ({onClick, children, className}) => {
	return (
	   <button onClick={onClick} className={className}>
        {children}
       </button>
	)
};

SimpleButton.propTypes = {
    onClick: PropTypes.func
}

export default SimpleButton;
