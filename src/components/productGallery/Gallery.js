import React, { PropTypes } from 'react';
import ThumbnailList from './ThumbnailList'
import './Gallery.css';

const Gallery =  React.createClass({
    
    getInitialState(){
      // The passed down props initialize the gallery
      // this is seed data for the component's internally-controlled
      // state
      console.log(this.props);
      let mainImage = this.props.initialImages[0];
      let thumbs = this.props.initialImages;
      thumbs.shift();
      
      return {
        mainImage, 
        thumbs
      }
      
    },

	  render() {
       
        return(
		  	 <div className={this.props.className}>
	  			  <ThumbnailList images={this.state.thumbs}/>
            <img src={this.state.mainImage.src} alt={this.state.mainImage.alt}/>
			   </div>
        )
	  }

});

ThumbnailList.propTypes = {
  initialImages: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired
  })),
  className: PropTypes.string
}

export default Gallery;
