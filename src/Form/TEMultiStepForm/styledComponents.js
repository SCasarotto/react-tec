import styled from 'styled-components'

import TEForm from './../TEForm'
import TEButton from './../TEButton'

export const Container = styled.div`
	${(props) => {
		return `
        `
	}}
`
export const StepContainer = styled.div`
	${(props) => {
		return `
            width: 100%;
            display: flex;
            position: relative;
            margin-bottom: 30px;

            @media (max-width: 500px) {
                margin-bottom: 15;
            }
        `
	}}
`
export const StepBar = styled.div`
	${(props) => {
		const { stepCount, theme } = props
		return `
            position: absolute;
            top: 14px;
            background-color: ${theme.primary};
            height: 2px;
            width: ${100 - 100 / stepCount}%;
            left: ${100 / stepCount / 2}%;
        `
	}}
`
export const StepWrapper = styled.div`
	${(props) => {
		const { stepCount } = props
		return `
            display: flex;
            flex-direction: column;
            align-items: center;
            width: ${100 / stepCount}%
        `
	}}
`
export const StepNumber = styled.div`
	${(props) => {
		const { active, theme } = props
		return `
            text-align: center;
            width: 30px;
            height: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            border: 1px solid ${theme.primary};
            z-index: 1;
            background-color: ${active ? theme.primary : theme.white};
            color: ${active ? theme.white : theme.primary};
            transition: color 0.2s ease-in, background-color 0.2s ease-in;
        `
	}}
`
export const StepTitle = styled.span`
	${(props) => {
		return `
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
	}}
`

export const Form = styled(TEForm)`
	${(props) => {
		return `
            margin-bottom: 30px;
        `
	}}
`
export const ButtonContainer = styled.div`
	${(props) => {
		return `
            display: flex;
        `
	}}
`

//TODO: Return to this and figure out way to handle popups and panel use cases without being weird to use in general
export const StepButton = styled(TEButton)`
	${(props) => {
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

		return ''
	}}
`
