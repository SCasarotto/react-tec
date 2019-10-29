import styled from 'styled-components'
import { FaUpload, FaRegWindowClose } from 'react-icons/fa'

import TEButton from '../TEButton'

export const ImageRowWrapper = styled.div`
	overflow-x: auto;
	width: 100%;
	padding: 5px;
	display: flex;
	align-items: center;
`
export const ImageWrapper = styled.div`
	position: relative;
	width: 150px;
	height: 150px;
	margin-left: 0px;
	margin-right: 15px;
	border: 1px solid ${(props) => props.theme.lightGray};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	flex-shrink: 0;
`
export const Image = styled.img`
	display: block;
	width: 100%;
	object-fit: contain;
	border-radius: 5px;
`
export const ClearImageButton = styled(TEButton)`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 3px;
	right: 3px;
	width: auto;
	padding: 5px;
	text-align: center;
`
export const ClearImageButtonIcon = styled(FaRegWindowClose)`
	color: inherit;
	display: block;
	font-size: 14px;
`
export const Label = styled.label`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 150px;
	flex-shrink: 0;
	padding: 30px;
	margin-left: 0px;
	margin-right: 15px;
	background-color: ${(props) => props.theme.white};
	cursor: pointer;
	border: 1px solid
		${(props) =>
			props.disabled ? props.theme.lighterGray : props.theme.lightGray};
	box-shadow: none;
	border-radius: 5px;
	transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;

	:hover,
	:active {
		border: 1px solid
			${(props) =>
				props.disabled ? props.theme.lighterGray : props.theme.primary};
		box-shadow: ${(props) =>
			props.disabled
				? 'none'
				: `0 0 0 1px ${props.theme.primary} inset;`};
	}
`
export const UploadIcon = styled(FaUpload)`
	font-size: 60px;
	color: ${(props) => props.theme.lightGray};
`
export const Input = styled.input`
	display: none;
`
export const ErrorMessage = styled.span`
	display: block;
	padding-top: 5px;
	padding-bottom: 5px;
	font-size: 14px;
	color: ${(props) => props.theme.errorRed};
`
