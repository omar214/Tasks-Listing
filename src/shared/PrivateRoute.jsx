import { Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes.js';
import PropTypes from 'prop-types';

const PrivateRoute = function ({ children }) {
	const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

	if (!isAuthenticated) {
		return <Navigate to={ROUTES.LOGIN} />;
	}

	return children;
};

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoute;
