import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleSignOut = () => {
		logOut();
	};

	return (
		<nav className='absolute top-0 w-full'>
			<div className='navbar flex justify-around bg-transparent text-neutral-content w-full mx-auto'>
				<img className='md:w-[150px] hidden md:block' src={logo} alt='' />
				<input
					type='text'
					placeholder='Type here'
					className='input input-bordered w-full max-w-xs text-black hidden md:block'
				/>
				<div className='flex gap-8 font-semibold text-lg text-slate-300'>
					<Link to='/'>Home</Link>
					<Link to='/news'>Destination</Link>
					<Link to='/hotels'>Hotel</Link>
					<Link to='/contact'>Contact</Link>
					<Link to='/login'>
						{user ? (
							<div className='flex items-center'>
								<button onClick={handleSignOut} className='btn btn-warning'>
									Sign out
								</button>
								<p>{user?.displayName}</p>
							</div>
						) : (
							<button className='btn btn-warning'>Login</button>
						)}
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
