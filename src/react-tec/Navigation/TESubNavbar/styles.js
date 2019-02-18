import { colors } from './../../../config/styles'

export default {
	container: {
		position: 'relative',
		width: '100%',
		backgroundColor: colors.white,
		paddingLeft: 30,
		boxShadow: colors.shadowBottom,
		zIndex: 5,

		'@media (max-width: 800px)': {
			paddingLeft: 25,
		},
		'@media (max-width: 650px)': {
			paddingLeft: 20,
		},
		'@media (max-width: 450px)': {
			paddingLeft: 15,
		},
	},
	content: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		height: 70,
		borderTop: `1px solid ${colors.lightGray}`,
		paddingRight: 30,

		'@media (max-width: 800px)': {
			height: 65,
			paddingRight: 25,
		},
		'@media (max-width: 650px)': {
			height: 60,
			paddingRight: 20,
		},
		'@media (max-width: 450px)': {
			height: 55,
			paddingRight: 15,
		},
	},
	navUl: {
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		overflowX: 'auto',
	},
	navLi: {
		listStyle: 'none',
		width: 100,
		flexShrink: 0,
	},
	linkWrapper: {},
	link: {
		textAlign: 'center',
		width: '100%',
		lineHeight: '40px',
		borderBottom: '4px solid transparent',
		fontWeight: 300,
		fontSize: 16,
		whiteSpace: 'nowrap',

		transition: 'border 0.2s ease-in, color 0.2s ease-in',
	},
	active: {
		color: colors.primary,
		borderBottom: `4px solid ${colors.primary}`,
	},
}
