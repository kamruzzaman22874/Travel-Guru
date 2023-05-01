import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AuthProvider from './components/providers/AuthProvider.jsx'
import router from './components/routes/Routes.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router}></RouterProvider>
		</AuthProvider>
	</React.StrictMode>
);
