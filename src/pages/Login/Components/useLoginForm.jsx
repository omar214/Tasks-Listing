import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { ROUTES } from '../../../constants/routes.js';

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Not a valid email address')
		.required('This field is required'),
	password: yup
		.string()
		.required('This field is required')
		.min(8, 'Password must be at least 8 characters'),
});

export const useLoginForm = () => {
	const navigate = useNavigate();

	const handleSubmit = () => {
		localStorage.setItem('isAuthenticated', 'true'); // 'true' or 'false'

		navigate(ROUTES.DASHBOARD);
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		enableReinitialize: true,
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	return formik;
};
