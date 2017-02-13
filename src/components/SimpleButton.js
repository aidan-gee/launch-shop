import React, { PropTypes } from 'react';

const SimpleButton = ({onClick, children, className, show = true}) => {
 
	return (
	   <button onClick={onClick} className={className} style={{display: show ? 'block' : 'none'}}>
        {children}
       </button>
	)
};

SimpleButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    show: PropTypes.bool
}

export default SimpleButton;
