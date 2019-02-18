//import { colors } from './../../config/styles';

export default {
	svgWrapperStyle: (title) => ({
		fontSize 			: 0,
		pointerEvents 		: title ? 'auto' : 'none',
	}),
	svgStyle: (primaryAxis) => {
		switch (primaryAxis){
			case 'x':
				return {
					width 	 			: '100%',
					height 				: 'auto',
					pointerEvents 		: 'none',
				}
			case 'y':
				return {
					width 	 			: 'auto',
					height 				: '100%',
					pointerEvents 		: 'none',
				}
			default:
				return {
					width 	 			: '100%',
					height 				: 'auto',
					pointerEvents 		: 'none',
				}
		}
	},
}
