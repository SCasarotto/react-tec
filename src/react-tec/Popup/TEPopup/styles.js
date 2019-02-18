import { colors } from './../../../config/styles'

export default {
	background: (visible) => ({
		position: 'fixed',
		width: '100%',
		height: '100%',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 1000,
		transition: 'visibility 0.25s ease-in-out, opacity 0.25s ease-in-out',
		overflowY: 'auto',

		opacity: visible ? 1 : 0,
		visibility: visible ? 'visible' : 'hidden',
	}),
	content: {
		position: 'relative',
		backgroundColor: colors.white,
		borderRadius: 20,
		overflow: 'hidden',
	},
}
