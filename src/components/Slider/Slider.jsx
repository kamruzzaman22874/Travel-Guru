import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleSlider from './SingleSlider/SingleSlider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
	const [travels, setTravels] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/places')
			.then((res) => res.json())
			.then((data) => setTravels(data.destinations));
	}, []);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className=''>
			<Carousel responsive={responsive} showDots={true} className='flex gap-3'>
				{travels.map((travel) => (
					<SingleSlider key={travel.id} travel={travel}></SingleSlider>
				))}
			</Carousel>
		</div>
	);
};

export default Slider;
