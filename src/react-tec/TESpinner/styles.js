//import { colors } from './../../config/styles';

export default {
	spinnerWrapper:{
		textAlign 		: 'center',
	},
	spinner : (size) => {
		let width 	= 80
		let height	= 80

		switch (size){
			case 'small':
				width  = 40
				height = 40
				break
			case 'medium':
				width  = 60
				height = 60
				break
			case 'large':
				width  = 80
				height = 80
				break
			default:
				break
		}

		return {
		    position 		: 'relative',
		    width,
		    height,
		    display 		: 'inline-block',
		}
	},
	ring : {
	    position 		: 'absolute',
	    borderRadius 	: '50%',
	    overflow 		: 'hidden',
	    borderTop 		: '3px solid transparent',
	    borderRight 	: '1px solid transparent',
	    borderBottom 	: '1px solid transparent',
	    borderLeft 		: '1px solid transparent',
	},
}
