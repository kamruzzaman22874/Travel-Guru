import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import BookingInfo from './BookingInfo';

const BookingDetails = ({ book }) => {
	const { name, photoUrl, price, rating, description } = book;
	return (
		<div>
			<div className='p-3'>
				<h2 className='text-2xl font-bold mb-2'>Stay in {name} </h2>
				<div className='flex  gap-5 justify-center mb-5 shadow-lg px-5 py-3 rounded '>
					<img className='w-56 py-2' src={photoUrl} alt='' />
					<div>
						<h1 className='text-xl font-bold'>{name}</h1>
						<p className='text-justify'>{description}</p>
						<div className='flex'>
							<p className='flex items-center'>
								<FaStar className='mr-2 text-warning'></FaStar> {rating}
							</p>
							<p className='ml-3'>{price}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingDetails;
