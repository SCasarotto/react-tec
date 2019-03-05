import { colors } from './../../../config/styles'

export default {
	input:{
		position			: 'relative',
		display				: 'block',
		width				: '100%',
		fontSize			: 16,
		backgroundColor		: colors.white,
		color         		: colors.gray,
		paddingTop 			: 5,
		paddingLeft 		: 5,
		paddingRight 		: 5,
		paddingBottom 		: 5,

		border				: `1px solid ${colors.gray}`,
		transition			: 'border-color 0.2s ease-in, box-shadow 0.2s ease-in',

		':hover' : {
		    border 			: `1px solid ${colors.blue}`,
		    boxShadow 		: `0 0 0 1px ${colors.blue} inset`,
		}
		':hover' : {
		    border 			: `1px solid ${colors.blue}`,
		    boxShadow 		: `0 0 0 1px ${colors.blue} inset`,
		}
	},
	disabled : {
		color 	: colors.gray,
		border 	: `1px solid ${colors.gray}`,
	},
	radio:{

	},
	checkbox : {

	}
}
