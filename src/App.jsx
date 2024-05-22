import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

import Login from './pages/Login';
import Tasks from './pages/Tasks';

import { ROUTES } from './constants/routes';
import PrivateRoute from './shared/PrivateRoute.jsx';

function App() {
	const routes = [
		{ path: ROUTES.LOGIN, element: <Login /> },
		{
			path: ROUTES.DASHBOARD,
			element: (
				<PrivateRoute>
					<Tasks />
				</PrivateRoute>
			),
		},
		{ path: ROUTES.ALL, element: <Navigate to={ROUTES.DASHBOARD} /> },
	];

	return (
		<Router>
			<Routes>
				{routes.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</Router>
	);
}

export default App;
