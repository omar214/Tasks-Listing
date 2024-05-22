import { Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes.js';

const PrivateRoute = function ({ children }) {
	const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

	if (!isAuthenticated) {
		return <Navigate to={ROUTES.LOGIN} />;
	}

	return children;
};

export default PrivateRoute;
