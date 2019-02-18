export default {
	container : {
		display 	    	: 'flex',
		flexFlow 	    	: 'row wrap',
		justifyContent		: 'space-between',
		alignItems      	: 'flex-start',

		paddingLeft 		: 30,
		paddingRight 		: 30,
		paddingTop 			: 30,
		paddingBottom 		: 30,

		'@media (max-width: 800px)' : {
			paddingLeft 		: 25,
			paddingRight 		: 25,
			paddingTop 			: 25,
			paddingBottom 		: 25,
		},
		'@media (max-width: 650px)' : {
			paddingLeft 		: 20,
			paddingRight 		: 20,
			paddingTop 			: 20,
			paddingBottom 		: 20,
		},
		'@media (max-width: 450px)' : {
			paddingLeft 		: 15,
			paddingRight 		: 15,
			paddingTop 			: 15,
			paddingBottom 		: 15,
		}
	},
}
