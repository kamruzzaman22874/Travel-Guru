import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Header = () => {
	return (
		<nav className='absolute top-0 w-full'>
			<div className='navbar flex justify-around bg-transparent text-neutral-content w-full mx-auto'>
				<img className='md:w-[150px] hidden md:block' src={logo} alt='' />
				<input
					type='text'
					placeholder='Type here'
					className='input input-bordered w-full max-w-xs text-black hidden md:block'
				/>
				<div className='flex gap-8 font-semibold text-lg text-black'>
					<Link to='/news'>News</Link>
					<Link to='/news'>Destination</Link>
					<Link to='/blog'>Blog</Link>
					<Link to='/contact'>Contact</Link>
					<Link to='/login'>
						<button className='btn btn-warning'>Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
