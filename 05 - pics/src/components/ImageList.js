import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {

	
	// console.log(props.images);
	const images = props.imageResult.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});


	// return <div> ImageList Component found {props.resultNumber}</div>
	return <div className="image-list"> {images} </div>;
};

export default ImageList;