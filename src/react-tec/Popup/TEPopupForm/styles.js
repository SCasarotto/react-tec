import { colors } from './../../../config/styles'

export default {
	content: {
		width: '90%',
		maxWidth: '650px',
		margin: '100px auto',
	},
	container: {
		padding: 30,
	},
	buttonContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	formButton: (side) => {
		let style = {
			borderTop: `1px solid ${colors.primary}`,
			borderBottom: 'none',
			borderTopLeftRadius: 0,
			borderTopRightRadius: 0,
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: 0,
			paddingTop: 15,
			paddingBottom: 15,
			fontSize: 16,
		}
		switch (side) {
			case 'left':
				style = {
					...style,
					borderRight: `1px solid ${colors.primary}`,
					borderLeft: 'none',

					':active': {
						color: colors.white,
						backgroundColor: colors.primary,
						borderRight: `1px solid ${colors.primary}`,
						borderLeft: 'none',
						borderTop: `1px solid ${colors.primary}`,
						borderBottom: 'none',
					},
					':hover': {
						color: colors.white,
						backgroundColor: colors.primary,
						borderRight: `1px solid ${colors.primary}`,
						borderLeft: 'none',
						borderTop: `1px solid ${colors.primary}`,
						borderBottom: 'none',
					},
				}
				break
			case 'right':
				style = {
					...style,
					borderLeft: `1px solid ${colors.primary}`,
					borderRight: 'none',

					':active': {
						color: colors.white,
						backgroundColor: colors.primary,
						borderLeft: `1px solid ${colors.primary}`,
						borderRight: 'none',
						borderTop: `1px solid ${colors.primary}`,
						borderBottom: 'none',
					},
					':hover': {
						color: colors.white,
						backgroundColor: colors.primary,
						borderLeft: `1px solid ${colors.primary}`,
						borderRight: 'none',
						borderTop: `1px solid ${colors.primary}`,
						borderBottom: 'none',
					},
				}
				break
			default:
				break
		}
		return style
	},
}
