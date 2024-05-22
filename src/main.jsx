import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const defaultTheme = createTheme({
	palette: {
		secondary: {
			main: '#305498',
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
