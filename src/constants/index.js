export const STATUS = {
	NOT_STARTED: 'NOT_STARTED',
	IN_PROGRESS: 'IN_PROGRESS',
	SUCCESS: 'SUCCESS',
};

export const STATUS_OPTIONS = [
	{	
		value: STATUS.NOT_STARTED,
		label: 'Not Started',
	},
	{
		value: STATUS.IN_PROGRESS,
		label: 'In Progress',
	},
	{
		value: STATUS.SUCCESS,
		label: 'Finished',
	},
];

export const getStausLabel = (status) => {
	const statusObj = STATUS_OPTIONS.find((option) => option.value === status);
	return statusObj ? statusObj.label : '';
};

export const getStatusBadge = (status) => {
	switch (status) {
		case STATUS.NOT_STARTED:
			return 'warning';
		case STATUS.IN_PROGRESS:
			return 'info';
		case STATUS.SUCCESS:
			return 'success';
		default:
			return 'default';
	}
};

export const modalStyles = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',

	minWidth: '40vw',
	minHeight: '60vh',
	width: { xs: '90vw', sm: '60vw', md: '40vw' },
	height: { sm: '60vh', md: '40vh' },
	bgcolor: 'background.paper',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	p: 3,
	boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
	borderRadius: '10px',
};
