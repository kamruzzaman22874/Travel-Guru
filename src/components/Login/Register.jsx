import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
	const { createUser , user } = useContext(AuthContext);
	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const firstName = form.firstName.value;
		const lastName = form.lastName.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirmPassword.value;
		if (password !== confirmPassword) {
			alert('please enter the valid password');
		}
		// console.log(firstName, lastName, email, password, confirmPassword);
		createUser(email, password)
			.then((result) => {
				const registerUser = result.user;
				console.log(registerUser);
				updateProfileData(result.user  , firstName)
			})
			.catch((err) => console.log(err));
	};

	const updateProfileData = (user, firstName, lastName) => {
		updateProfile(user, {
			displayName: firstName
		})
			.then(() => {
				console.log('user updated');
			})
			.catch(err => console.log(err))
	}
	return (
		<>
			<div className='hero h-full bg-slate-500'>
				<div className='hero-content flex-col w-full py-28'>
					<div className='text-center lg:text-left'>
						<h1 className='text-2xl font-bold'>Login now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={handleRegister} className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>First Name</span>
								</label>
								<input
									type='text'
									name='firstName'
									placeholder='First Name'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Last Name</span>
								</label>
								<input
									type='text'
									name='lastName'
									placeholder='Last Name'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									name='email'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='password'
									name='password'
									placeholder='password'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Confirm Password</span>
								</label>
								<input
									type='password'
									name='confirmPassword'
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
									already have an account?
									<Link to='/login' className='text-warning font-semibold'>
										Login
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
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
