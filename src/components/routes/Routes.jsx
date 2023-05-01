import { createBrowserRouter } from 'react-router-dom';
import BookingDetails from '../BookingInfo/bookingDetails';
import BookingInfo from '../BookingInfo/BookingInfo';
import Details from '../Details/Details';
import Home from '../Home/Home';
import Main from '../layout/Main';
import Login from '../Login/Login';
import Register from '../Login/Register';
import Slider from '../Slider/Slider';
import PrivateRoutes from './PrivateRoutes';

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
				path: '/hotels',
				element: <BookingInfo></BookingInfo>,
				loader: () => fetch('http://localhost:5000/hotels'),
			},
			{
				path: '/places/:id',
				element: <Details></Details>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/places/${params.id}`),
			},
			// {
			// 	path: '/hotels/:id',
			// 	element: <BookingInfo></BookingInfo>,

			// 	loader: ({ params }) =>
			// 		fetch(`http://localhost:5000/hotels/${params?.id}`),
			// },
		],
	},
]);

export default router;
