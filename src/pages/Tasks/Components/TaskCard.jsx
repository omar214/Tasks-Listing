import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Chip } from '@mui/material';
import { getStausLabel, getStatusBadge } from '../../../constants/index.js';

export default function TaskCard({ task, onDelete, onUpdate }) {
	return (
		<Card sx={{ pb: 2 }}>
			<CardContent>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography gutterBottom variant="h5" component="div">
						{task.title}
					</Typography>
					<Chip
						label={getStausLabel(task.status)}
						color={getStatusBadge(task.status)}
						variant='outlined'
					/>
				</Box>
				<Typography variant="body2" color="text.secondary">
					{task.description}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={() => onUpdate(task)}
				>
					Update
				</Button>
				<Button
					variant="contained"
					color="error"
					size="small"
					onClick={() => onDelete(task.id)}
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
}
