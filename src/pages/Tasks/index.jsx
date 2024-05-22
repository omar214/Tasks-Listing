import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import AddNewButton from './Components/AddNewButton.jsx';
import { useState } from 'react';
import TaskCard from './Components/TaskCard.jsx';
import Swal from 'sweetalert2';
import EditTaskModal from './Components/EditTaskModal.jsx';

const Tasks = () => {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem('tasks')) || [],
	);
	const [taskToEdit, setTaskToEdit] = useState(null);

	const handleAddTask = (task) => {
		setTasks((prevTasks) => {
			const newTask = {
				id: Math.floor(Math.random() * 100000),
				...task,
			};

			localStorage.setItem('tasks', JSON.stringify([...prevTasks, newTask]));
			return [...prevTasks, newTask];
		});
	};

	const handleDeleteTask = async (id) => {
		const result = await Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#305498',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		});

		if (!result.isConfirmed) return console.log('No');

		setTasks(tasks.filter((task) => task.id !== id));
		Swal.fire({
			title: 'Deleted!',
			text: 'Your Task has been deleted.',
			icon: 'success',
		});
	};

	const handleUpdateTask = (task) => {
		setTaskToEdit(task);
	};

	return (
		<Container sx={{ mt: 3 }}>
			<Typography variant="h4">Tasks</Typography>
			<Divider sx={{ my: 2 }} />
			<Stack flexDirection="row" justifyContent="flex-end">
				<AddNewButton handleAddTask={handleAddTask} />
			</Stack>

			{/*  */}
			{/*  */}
			{/*  */}
			{/* Filters */}

			{tasks.length === 0 ? (
				<Typography variant="h6" mt={3} color="mute">
					No tasks found
				</Typography>
			) : (
				<Grid container spacing={2} mt={3}>
					{tasks.map((task) => (
						<Grid item key={task.id} xs={12} md={6}>
							<TaskCard
								key={task.id}
								task={task}
								onDelete={handleDeleteTask}
								onUpdate={handleUpdateTask}
							/>
						</Grid>
					))}
				</Grid>
			)}

			{/*  */}
			{/*  */}
			{/* Pagination */}

			<EditTaskModal
				open={Boolean(taskToEdit)}
				handleClose={() => setTaskToEdit(null)}
				setTasks={setTasks}
				taskToEdit={taskToEdit}
			/>
		</Container>
	);
};

export default Tasks;
