import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleSlider from './SingleSlider/SingleSlider';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
	const [travels, setTravels] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/places')
			.then((res) => res.json())
			.then((data) => setTravels(data.destinations));
	}, []);

	return (
		<div className='flex gap-5'>
			{travels.map((travel) => (
				<SingleSlider key={travel.id} travel={travel}></SingleSlider>
			))}
		</div>
	);
};

export default Slider;
