import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return <h1>Loading.......</h1>;
	}
	if (user) {
		return children;
	}
	return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>;
};

export default PrivateRoutes;
