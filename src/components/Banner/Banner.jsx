import React from 'react';
import bgImg from '../../assets/Rectangle 1.png';
import Slider from '../Slider/Slider';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
	return (
		<div
			className='hero min-h-screen'
			style={{
				width: 'full',
				height: 'full',
				backgroundImage: `url("${bgImg}")`,
			}}>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-neutral-content'>
				<div className='flex items-center'>
					<div className='w-[40%]'>
						<h1 className='mb-5 text-6xl font-bold'>COX'S BAZAR</h1>
						<p className='mb-5 text-justify w-3/4'>
							Cox's Bazar is a city, fishing port, tourism centre and district
							headquarters in southeastern Bangladesh. It is famous mostly for
							its long natural sandy beach, and it ...
						</p>
						<button className='btn btn-warning'>
							Booking <FaArrowRight className='ml-2'></FaArrowRight>{' '}
						</button>
					</div>
					<div className='w-[60%]'>
						<Slider></Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
