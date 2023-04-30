import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Register = () => {
	return (
		<>
			<div className='hero h-full bg-slate-500'>
				<div className='hero-content flex-col w-full py-28'>
					<div className='text-center lg:text-left'>
						<h1 className='text-2xl font-bold'>Login now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<div className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>First Name</span>
								</label>
								<input
									type='text'
									placeholder='Last Name'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Last Name</span>
								</label>
								<input
									type='text'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									placeholder='First Name'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='text'
									placeholder='password'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Confirm Password</span>
								</label>
								<input
									type='text'
									placeholder='Confirm Password'
									className='input input-bordered'
								/>
							</div>
							<div className='flex justify-between'>
								<label className='flex py-2'>
									<input type='checkbox' name='' id='' />
									<p className='ml-3'>Remember Me</p>
								</label>
								<span className='py-2'>
									<a
										href='#'
										className='text-md ml-3 text-warning font-semibold'>
										Forgot password?
									</a>
								</span>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-warning'>Login</button>
							</div>
							<div>
								<p className='text-sm text-center'>
									Don’t have an account?
									<Link to='/register' className='text-warning font-semibold'>
										Create an account
									</Link>
								</p>
							</div>
							<div className='flex flex-col w-full border-opacity-50'>
								<div className='divider'>OR</div>
							</div>
							<div>
								<button className='border p-2 w-full rounded-full mb-2 flex items-center justify-around'>
									<FaFacebook className='rounded-full text-blue-500 text-2xl'></FaFacebook>
									Continue with Facebook
								</button>

								<button className='border p-2 w-full rounded-full flex items-center justify-around'>
									<FaGoogle className='rounded-full text-amber-500 text-2xl'></FaGoogle>
									Continue with Google
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
