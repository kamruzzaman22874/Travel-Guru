import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookingInfo = () => {
	const bookingsData = useLoaderData();
	const { img, details, name } = bookingsData;

	return (
		<div className='mt-28 w-11/12 mx-auto flex justify-between'>
			<div className='w-[3/4]'>
				<h2 className='text-2xl font-bold mb-2'>Stay in {name} </h2>
				<div className='flex items-center gap-5 bg-slate-400'>
					<img className='w-[250px] rounded' src={img} alt='' />
					<div>
						<p>{details}</p>
					</div>
				</div>
			</div>

			<div>
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
