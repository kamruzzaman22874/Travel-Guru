import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useRef } from 'react';

const Login = () => {
	const { loginUser, googleLogin, resetPassword } = useContext(AuthContext);
	const emailRef = useRef()
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		form.reset();

		loginUser(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((err) => console.error(err));
	};
	const handleWithGoogle = () => {
		googleLogin()
			.then((result) => {
				const googleUser = result.user;
				console.log(googleUser);
				navigate(from, { replace: true });
			})
			.catch((err) => console.error(err));
	};
	const handleResetPassword = () => {
		const email = emailRef.current.value;
		if (!email) {
			alert('Please enter a valid email')
			return;
		}
		resetPassword(email)
			.then(() => {
			alert('Email verification code send successful')
			})
		.catch(err => console.log(err))

	}
	return (
		<div>
			<div className='hero h-full bg-slate-200'>
				<div className='hero-content flex-col w-full py-28'>
					<div className='text-center lg:text-left'>
						<h1 className='text-2xl font-bold'>Login now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={handleLogin} className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									ref={emailRef}
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
								<div className='flex justify-between'>
									<label className='flex py-2'>
										<input type='checkbox' name='' id='' />
										<p className='ml-3'>Remember Me</p>
									</label>
									<span className='py-2'>
										<Link onClick={handleResetPassword}
											to=''
											className='text-md ml-3 text-warning font-semibold'>
											Forgot password?
										</Link>
									</span>
								</div>
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

								<button
									onClick={handleWithGoogle}
									className='border p-2 w-full rounded-full flex items-center justify-around'>
									<FaGoogle className='rounded-full text-amber-500 text-2xl'></FaGoogle>
									Continue with Google
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
