import React, { PropTypes } from 'react';

const ThumbnailList = ({images, className}) => {
  
    let thumbs = images.map((el, i) => {
          return <img key={i} src={el.src} alt={el.alt}/>;
        });

	  return (
		  	<div className={className || 'thumbnails'}>
	  			{thumbs}
			</div>
	  )

}

ThumbnailList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string
}

export default ThumbnailList;
