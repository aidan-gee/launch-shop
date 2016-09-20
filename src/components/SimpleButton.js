import React, { PropTypes } from 'react';

const SimpleButton = ({onClick, children, className, show}) => {
 
	return (
	   <button onClick={onClick} className={className} style={{display: show ? 'block' : 'none'}}>
        {children}
       </button>
	)
};

SimpleButton.propTypes = {
    onClick: PropTypes.func
}

export default SimpleButton;
