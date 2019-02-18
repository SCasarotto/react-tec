import { colors } from './../../../config/styles'

export default {
	row: {
		maxWidth: 600,
	},
	fileRowWrapper: {},
	fileWrapper: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		paddingRight: 5,
		border: `1px solid ${colors.lightGray}`,
		backgroundColor: colors.white,
		// borderRadius: 5,
	},
	fileName: {
		flex: 1,
		paddingLeft: 5,
		display: 'block',
	},
	downloadFileButton: {
		width: 'auto',
		paddingTop: 5,
		paddingBottom: 5,
		paddingRight: 10,
		paddingLeft: 10,
		color: colors.darkGray,
		backgroundColor: colors.white,
		border: `1px solid ${colors.lightGray}`,
		borderRadius: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		transition:
			'color 0.2s ease-in 0s, background-color 0.2s ease-in 0s, border 0.2s ease-in 0s',
		':active': {
			backgroundColor: colors.primary,
			color: colors.white,
			border: `1px solid ${colors.primary}`,
		},
		':hover': {
			backgroundColor: colors.primary,
			color: colors.white,
			border: `1px solid ${colors.primary}`,
		},
	},
	downloadImageButtonIcon: {
		color: 'inherit',
		display: 'block',
		fontSize: 18,
	},
	clearFileButton: {
		width: 'auto',
		paddingTop: 5,
		paddingBottom: 5,
		paddingRight: 10,
		paddingLeft: 10,
		marginLeft: 5,
	},
	clearFileButtonIcon: {
		color: 'inherit',
		display: 'block',
		fontSize: 18,
	},
	input: {
		marginTop: 10,
	},
}
