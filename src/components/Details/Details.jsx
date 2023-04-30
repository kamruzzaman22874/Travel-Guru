import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bgImg from '../../assets/Rectangle 1.png';

const Details = () => {
	const details = useLoaderData();
	const { name, description,id } = details;
	return (
		<div
			className='hero min-h-screen bg-slate-500'
			style={{
				width: 'full',
				height: 'full',
				backgroundImage: `url("${bgImg}")`,
			}}>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content flex-col lg:flex-row-reverse items-center justify-between'>
				<div className='w-[40%] bg-white  px-4 py-6 rounded'>
					<p className='space-y-2 mb-4'>
						<label htmlFor=''>Origin</label>
						<input
							type='text'
							placeholder='Type here'
							className='input input-bordered w-full bg-slate-100'
						/>
					</p>
					<p className='space-y-2'>
						<label htmlFor=''>Destinations</label>
						<input
							type='text'
							placeholder='Type here'
							className='input input-bordered w-full bg-slate-100'
						/>
					</p>
					<div className='flex flex-1 justify-between mt-4'>
						<p className='space-y-2'>
							<label htmlFor='' className='text-start'>
								From
							</label>
							<input
								type='date'
								placeholder='Type here'
								className='input input-bordered w-full bg-slate-100'
							/>
						</p>

						<p className='space-y-2'>
							<label htmlFor=''>To</label>
							<input
								type='date'
								placeholder='Type here'
								className='input input-bordered w-full bg-slate-100'
							/>
						</p>
					</div>
					<div className='mt-8'>
						<Link to={`/booking/${id}`}>
							<button className='btn btn-warning w-full'>Start Booking</button>
						</Link>
					</div>
				</div>
				<div className='w-[60%] text-white'>
					<h1 className='text-5xl font-bold'>{name}</h1>
					<p className='py-6'>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
