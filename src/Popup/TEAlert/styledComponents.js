import styled from 'styled-components'

import TEPopup from './../TEPopup'
import TEButton from './../../Form/TEButton'

export const Popup = styled(TEPopup)`
	${(props) => {
		return `
            & > div{
                width: 90%;
                max-width: 600px;
                margin: 100px auto;
            }
        `
	}}
`
export const Title = styled.h4`
	${(props) => {
		const { theme } = props
		return `
            position: relative;
            width: 100%;
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
            color: ${theme.darkerGray};
            padding: 30px 30px 0px 30px;
        `
	}}
`
export const Message = styled.p`
	${(props) => {
		const { theme } = props
		return `
            position: relative;
            width: 100%;
            text-align: center;
            font-size: 18px;
            line-height: 1.25;
            margin-bottom: 30px;
            padding: 0px 40px;
            color: ${theme.darkerGray};
        `
	}}
`
export const Button = styled(TEButton)`
	${(props) => {
		const { theme } = props
		return `
        border-top: 1px solid ${theme.primary};
        border-right: none;
        border-bottom: none;
        border-left: none;
        line-height: 2;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        transition: border 0.2s ease-in, color 0.2s ease-in, background-color 0.2s ease-in;

        :active {
            color: ${theme.white};
            background-color: ${theme.primary};
            border-top: 1px solid ${theme.primary};
            border-right: none;
            border-bottom: none;
            border-left: none;
        }
        :hover {
            color: ${theme.white};
            background-color: ${theme.primary};
            border-top: 1px solid ${theme.primary};
            border-right: none;
            border-bottom: none;
            border-left: none;
        }
        `
	}}
`
