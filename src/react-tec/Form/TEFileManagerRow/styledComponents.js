import styled from 'styled-components'

import { FaFileDownload, FaRegWindowClose } from 'react-icons/fa'

import TERow from './../TERow'
import TEFileInput from './../TEFileInput'
import TEButton from './../TEButton'

export const WrapperRow = styled(TERow)`
	${(props) => {
		return `
			max-width: 600px;
		`
	}}
`
export const FileRowWrapper = styled.div`
	${(props) => {
		return `
		`
	}}
`
export const FileWrapper = styled.div`
	${(props) => {
		const { theme } = props
		return `
			display: flex;
			align-items: center;
			padding: 5px;
			border: 1px solid ${theme.lightGray};
			backgroundColor: ${theme.white};
		`
	}}
`
export const FileName = styled.span`
	${(props) => {
		return `
			flex: 1;
			padding-left: 5px;
			display: block;
		`
	}}
`
export const DownloadFileButton = styled.a`
	${(props) => {
		const { theme } = props
		return `
			width: auto;
			padding: 5px 10px;
			color: ${theme.darkGray};
			background-color: ${theme.white};
			border: 1px solid ${theme.lightGray};
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;

			transition: color 0.2s ease-in 0s, background-color 0.2s ease-in 0s, border 0.2s ease-in 0s;
			:active {
				background-color: ${theme.primary};
				color: ${theme.white};
				border: 1px solid ${theme.primary};
			}
			:hover {
				background-color: ${theme.primary};
				color: ${theme.white};
				border: 1px solid ${theme.primary};
			}
		`
	}}
`
export const DownloadImageButtonIcon = styled(FaFileDownload)`
	${(props) => {
		return `
			color: inherit;
			display: block;
			font-size: 18px;
		`
	}}
`
export const ClearFileButton = styled(TEButton)`
	${(props) => {
		return `
			width: auto;
			padding: 5px 10px;
			margin-left: 5,
		`
	}}
`
export const ClearFileButtonIcon = styled(FaRegWindowClose)`
	${(props) => {
		return `
			color: inherit;
			display: block;
			font-size: 18px;
		`
	}}
`
export const Input = styled(TEFileInput)`
	${(props) => {
		return `
			margin-top: 30px;
		`
	}}
`
