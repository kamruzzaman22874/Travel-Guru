import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import BookingDetails from './bookingDetails';

const BookingInfo = () => {
	const bookingsData = useLoaderData();
	// const { name, photoUrl, price, rating, description } = hotel;
	// console.log(hotel);
	console.log(bookingsData);

	return (
		<div className='mt-28 w-11/12 mx-auto grid grid-cols-2 gap-8 bg-slate-300  items-center rounded'>
			<div>
				{bookingsData.map((book) => (
					<BookingDetails key={book.id} book={book}></BookingDetails>
				))}
			</div>

			<div className='w-full'>
				<iframe
					className='rounded'
					src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58376.923138895465!2d90.4031033!3d23.869835000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1682868328047!5m2!1sen!2sbd'
					width='600'
					height='450'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</div>
	);
};

export default BookingInfo;
