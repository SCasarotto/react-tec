import styled from 'styled-components'

import TEForm from '../TEForm'
import TEButton from '../TEButton'

export const Container = styled.div``
export const StepContainer = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	margin-bottom: 30px;

	@media (max-width: 500px) {
		margin-bottom: 15;
	}
`
export const StepBar = styled.div`
	position: absolute;
	top: 14px;
	background-color: ${(props) => props.theme.primary};
	height: 2px;
	width: ${(props) => 100 - 100 / props.stepCount}%;
	left: ${(props) => 100 / props.stepCount / 2}%;
`
export const StepWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${(props) => 100 / props.stepCount}%;
`
export const StepNumber = styled.div`
	text-align: center;
	width: 30px;
	height: 30px;
	margin-bottom: 10px;
	line-height: 30px;
	border: 1px solid ${(props) => props.theme.primary};
	z-index: 1;
	background-color: ${(props) =>
		props.active ? props.theme.primary : props.theme.white};
	color: ${(props) =>
		props.active ? props.theme.white : props.theme.primary};
	transition: color 0.2s ease-in, background-color 0.2s ease-in;
`
export const StepTitle = styled.span`
	text-align: center;
	font-size: 18px;
	display: block;

	@media (max-width: 500px) {
		font-size: 16px;
	}
	@media (max-width: 350px) {
		font-size: 14px;
	}
`

export const Form = styled(TEForm)`
	margin-bottom: 30px;
`
export const ButtonContainer = styled.div`
	display: flex;
`

//TODO: Return to this and figure out way to handle popups and panel use cases without being weird to use in general
/*
		// const { position, rounded, singleButton, theme } = props
		// let styles = `
		//     padding: 10px 20px;
		//     color: ${theme.primary};
		//     background-color: ${theme.white};
		//     border-top: 1px solid ${theme.primary};
		//     border-bottom: none;
		//     transition: border 0.2s ease-in, color 0.2s ease-in, background-color 0.2s ease-in;
		// `

		// switch (position) {
		//     case 'left':
		//         styles += `
		//                 border-left: none;
		//                 border-right: 1px solid ${theme.primary};

		//                 border-bottom-left-radius: ${rounded ? '5px' : '0px'};
		//                 border-top-right-radius: 0px;
		//                 border-top-left-radius: 0px;
		//                 border-bottom-right-radius: 0px;

		//                 :hover {
		//                     color: ${theme.white};
		//                     background-color: ${theme.primary};
		//                     border-top: 1px solid ${theme.primary};
		//                     border-left: none;
		//                     border-right: 1px solid ${theme.primary};
		//                     border-bottom: none;
		//                 }
		//                 :active {
		//                     color: ${theme.white};
		//                     background-color: ${theme.primary};
		//                     border-top: 1px solid ${theme.primary};
		//                     border-left: none;
		//                     border-right: 1px solid ${theme.primary};
		//                     border-bottom: none;
		//                 }
		//             `
		//         break
		//     case 'right':
		//         styles += `
		//                 border-left: ${singleButton ? 'none' : `1px solid ${theme.primary}`};
		//                 border-right: none;

		//                 border-bottom-right-radius: ${rounded ? '5px' : '0px'};
		//                 border-bottom-left-radius: ${singleButton && rounded ? '5px' : '0px'};
		//                 border-top-right-radius: 0px;
		//                 border-top-left-radius: 0px;

		//                 :hover {
		//                     color: ${theme.white};
		//                     background-color: ${theme.primary};
		//                     border-top: 1px solid ${theme.primary};
		//                     border-left: ${singleButton ? 'none' : `1px solid ${theme.primary}`};
		//                     border-right: none;
		//                     border-bottom: none;
		//                 }
		//                 :active {
		//                     color: ${theme.white};
		//                     background-color: ${theme.primary};
		//                     border-top: 1px solid ${theme.primary};
		//                     border-left: ${singleButton ? 'none' : `1px solid ${theme.primary}`};
		//                     border-right: none;
		//                     border-bottom: none;
		//                 }
		//             `
		//         break
		//     default:
		//         break
		// }
	*/
export const StepButton = styled(TEButton)``
