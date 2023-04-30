import React from 'react';
import { Link } from 'react-router-dom';

const SingleSlider = ({ travel }) => {
	const { imageUrl, name, id } = travel;
	return (
		<div className='ml-3'>
			<Link to={`/places/${id}`}>
				<img src={imageUrl} alt='' />
			</Link>
			<h1 className='mb-5 text-2xl font-bold absolute bottom-5 left-4'>
				{name}
			</h1>
		</div>
	);
};

export default SingleSlider;
