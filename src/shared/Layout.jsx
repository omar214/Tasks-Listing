import { Box } from '@mui/material';
import Navbar from './Navbar.jsx';

const Layout = ({ children, ...props }) => {
	return (
		<Box {...props}>
			<Navbar mb={2} />
			{children}
		</Box>
	);
};

export default Layout;
