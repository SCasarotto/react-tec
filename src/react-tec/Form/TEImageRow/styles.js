import { colors } from './../../../config/styles'

export default {
	imageRowWrapper: {
		overflowX: 'auto',
		width: '100%',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		paddingRight: 5,
		display: 'flex',
		alignItems: 'center',
	},
	imageWrapper: {
		position: 'relative',
		width: 150,
		height: 150,
		marginLeft: 0,
		marginRight: 15,
		borderTop: `1px solid ${colors.lightGray}`,
		borderBottom: `1px solid ${colors.lightGray}`,
		borderLeft: `1px solid ${colors.lightGray}`,
		borderRight: `1px solid ${colors.lightGray}`,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		flexShrink: 0,
	},
	image: {
		display: 'block',
		width: '100%',
		// height: '100%',
		objectFit: 'contain',
		borderRadius: 5,
	},
	clearImageButton: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		top: 3,
		right: 3,
		// width: 40,
		width: 'auto',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		paddingRight: 5,
		textAlign: 'center',
	},
	clearImageButtonIcon: {
		color: 'inherit',
		display: 'block',
		fontSize: 14,
	},
	label: (disabled) => {
		const styles = {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: 150,
			height: 150,
			flexShrink: 0,
			padding: 30,
			marginLeft: 0,
			marginRight: 15,
			backgroundColor: colors.white,
			cursour: 'pointer',
			borderBottom: `1px solid ${colors.lightGray}`,
			borderTop: `1px solid ${colors.lightGray}`,
			borderLeft: `1px solid ${colors.lightGray}`,
			borderRight: `1px solid ${colors.lightGray}`,
			boxShadow: 'none',
			borderRadius: 5,
			transition: 'border-color 0.2s ease-in, box-shadow 0.2s ease-in',

			':hover': {
				borderBottom: `1px solid ${colors.primary}`,
				borderTop: `1px solid ${colors.primary}`,
				borderLeft: `1px solid ${colors.primary}`,
				borderRight: `1px solid ${colors.primary}`,
				boxShadow: `0 0 0 1px ${colors.primary} inset`,
			},
			':active': {
				borderBottom: `1px solid ${colors.primary}`,
				borderTop: `1px solid ${colors.primary}`,
				borderLeft: `1px solid ${colors.primary}`,
				borderRight: `1px solid ${colors.primary}`,
				boxShadow: `0 0 0 1px ${colors.primary} inset`,
			},
		}

		if (disabled) {
			styles.borderBottom = `1px solid ${colors.lighterGray}`
			styles.borderTop = `1px solid ${colors.lighterGray}`
			styles.borderLeft = `1px solid ${colors.lighterGray}`
			styles.borderRight = `1px solid ${colors.lighterGray}`

			styles.boxShadow = 'none'
			styles[':hover'].borderBottom = `1px solid ${colors.lighterGray}`
			styles[':hover'].borderTop = `1px solid ${colors.lighterGray}`
			styles[':hover'].borderLeft = `1px solid ${colors.lighterGray}`
			styles[':hover'].borderRight = `1px solid ${colors.lighterGray}`
			styles[':hover'].boxShadow = 'none'

			styles[':active'].borderBottom = `1px solid ${colors.lighterGray}`
			styles[':active'].borderTop = `1px solid ${colors.lighterGray}`
			styles[':active'].borderLeft = `1px solid ${colors.lighterGray}`
			styles[':active'].borderRight = `1px solid ${colors.lighterGray}`
			styles[':active'].boxShadow = 'none'
		}
		return styles
	},
	uploadIcon: {
		fontSize: 60,
		color: colors.lightGray,
	},
	input: { display: 'none' },
	errorMessage: {
		display: 'block',
		paddingTop: 5,
		paddingBottom: 5,
		fontSize: 14,
		color: colors.errorRed,
	},
}
