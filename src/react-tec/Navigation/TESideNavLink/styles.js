import { colors } from './../../../config/styles'

export default {
	li: {
		listStyle: 'none',
	},
	linkWrapper: {
		borderTopLeftRadius: 27,
		borderBottomLeftRadius: 27,
		color: colors.darkGray,
		marginLeft: 10,
		':active': {
			color: colors.primary,
		},
		':hover': {
			color: colors.primary,
		},
	},
	link: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 25,
		paddingTop: 15,
		paddingBottom: 15,
		marginBottom: 5,
		cursor: 'pointer',
		borderTopLeftRadius: 26,
		borderBottomLeftRadius: 26,
	},
	active: {
		color: colors.primary,
	},
	titleSapn: {
		fontSize: 18,
		fontWeight: 300,
	},
	iconWrapper: {
		width: 14,
		fill: 'currentColor',
	},
	icon: {},
}
