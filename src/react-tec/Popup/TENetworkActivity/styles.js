import { colors } from './../../../config/styles'

export default {
	content : {
		position 			: 'absolute',
	    top 				: '50%',
	    left 				: '50%',
	    WebkitTransform		: 'translate(-50%, -50%)',
	    msTransform			: 'translate(-50%, -50%)',
	    transform 			: 'translate(-50%, -50%)',
		backgroundColor		: 'rgba(0,0,0,0.5)',
		padding 			: '60px',
		textAlign			: 'center',
	},
	spinner : {
	    marginBottom 	: '30px',
	},
	message : {
		position 			: 'relative',
		width 				: '100%',
		textAlign			: 'center',
		fontSize			: '24px',
		color 				: colors.white,
	}
}
