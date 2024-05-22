import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import {
	STATUS,
	STATUS_OPTIONS,
	modalStyles,
} from '../../../constants/index.js';

const validationSchema = yup.object().shape({
	title: yup.string().required('This field is required'),
	description: yup.string().required('This field is required'),
	status: yup
		.string()
		.required('This field is required')
		.oneOf(Object.values(STATUS)),
});

const EditTaskModal = ({ open, handleClose, taskToEdit, setTasks }) => {
	const handleSubmit = (values) => {
		setTasks((tasks) => {
			const editedTasks = tasks.map((task) => {
				if (task.id !== taskToEdit?.id) {
					return task;
				}

				return {
					...task,
					...values,
				};
			});

			localStorage.setItem('tasks', JSON.stringify(editedTasks));
			return editedTasks;
		});

		formik.resetForm();

		Swal.fire({
			title: 'Task Updated!',
			icon: 'success',
		});

		handleClose();
	};

	const formik = useFormik({
		initialValues: {
			title: taskToEdit ? taskToEdit.title : '',
			description: taskToEdit ? taskToEdit.description : '',
			status: taskToEdit ? taskToEdit.status : STATUS.NOT_STARTED,
		},
		enableReinitialize: true,
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={modalStyles}>
				<Typography variant="h4">Update Task</Typography>
				<Box component={'form'} onSubmit={formik.handleSubmit}>
					<TextField
						margin="normal"
						fullWidth
						label="Title"
						name="title"
						autoFocus
						value={formik.values.title}
						onChange={formik.handleChange}
						error={formik.touched.title && Boolean(formik.errors.title)}
						helperText={formik.touched.title && formik.errors.title}
					/>
					<TextField
						margin="normal"
						fullWidth
						name="description"
						label="Description"
						type="textarea"
						value={formik.values.description}
						onChange={formik.handleChange}
						error={
							formik.touched.description && Boolean(formik.errors.description)
						}
						helperText={formik.touched.description && formik.errors.description}
					/>
					<FormControl fullWidth margin="normal">
						<InputLabel id="status-label-id">Status</InputLabel>
						<Select
							labelId="status-label-id"
							id="demo-simple-select"
							name="status"
							value={formik.values.status}
							onChange={formik.handleChange}
							label="Status"
						>
							{STATUS_OPTIONS.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<Box
						sx={{
							display: 'flex',
							gap: 2,
							mt: 3,
							justifyContent: 'flex-end',
						}}
					>
						<Button variant="contained" color="error" onClick={handleClose}>
							Close
						</Button>
						<Button type="submit" variant="contained" color="secondary">
							Update Task
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

export default EditTaskModal;
