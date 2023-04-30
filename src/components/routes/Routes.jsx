import { createBrowserRouter } from 'react-router-dom';
import BookingInfo from '../BookingInfo/BookingInfo';
import Details from '../Details/Details';
import Home from '../Home/Home';
import Main from '../layout/Main';
import Login from '../Login/Login';
import Register from '../Login/Register';
import Slider from '../Slider/Slider';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/places/:id',
				element: <Details></Details>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/places/${params.id}`),
			},
			{
				path: '/booking/:id',
				element: <BookingInfo></BookingInfo>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/booking/${params.id}`)
			},
		],
	},
]);

export default router;
