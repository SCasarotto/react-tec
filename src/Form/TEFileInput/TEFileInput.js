//
// Version 0.3.0
//

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
	Wrapper,
	InputWrapper,
	Label,
	LabelCopy,
	LabelIcon,
	Input,
	ClearButton,
	ButtonIcon,
	ErrorMessage,
} from './styledComponents'

const TEFileInput = (props) => {
	const [active, setActive] = useState(false)
	const [fileArray, setFileArray] = useState([])
	const [errorData, setErrorData] = useState({ error: false, message: '' })
	const [inputKey, setInputKey] = useState(props.resetKey || 'inputKey')

	const onFileChange = (e, droppedFiles) => {
		const { pattern, onChange } = props
		const files = e.target.files || droppedFiles

		if (!files) {
			console.error('No file provided to input.')
			return
		}

		//Validate Files
		if (pattern && pattern instanceof RegExp) {
			for (let i = 0; i < files.length; i++) {
				if (!files[i].type.match(pattern)) {
					console.warn('One of the selected files is not of the correct type.')
					setErrorData({
						error: true,
						message: 'One of the selected files is not of the correct type.',
					})
					return
				}
			}
		}

		setFileArray(files)
		setErrorData({
			error: false,
			message: '',
		})
		onChange(files)
	}
	const onDragEnter = (e) => setActive(true)
	const onDragLeave = (e) => setActive(false)
	const onDragOver = (e) => e.preventDefault()
	const onDrop = (e) => {
		e.preventDefault()
		setActive(false)
		onFileChange(e, e.dataTransfer.files)
	}
	const handleClearInput = () => {
		setInputKey(new Date().getTime()) //This will reset the input
		setFileArray([])
		setErrorData({
			error: false,
			message: '',
		})
	}

	const { disabled, className, placeholder = 'Choose a file...', ...rest } = props

	let labelCopy = placeholder
	if (fileArray && fileArray.length === 1) {
		labelCopy = fileArray[0].name
	} else if (fileArray && fileArray.length > 1) {
		labelCopy = `${fileArray.length} files selected`
	}

	return (
		<Wrapper className={className}>
			<InputWrapper
				onDragEnter={onDragEnter}
				onDragLeave={onDragLeave}
				onDragOver={onDragOver}
				onDrop={onDrop}
				active={active}
				disabled={disabled}
				className='TEFileInputInputWrapper'
			>
				<Label active={active} disabled={disabled} className='TEFileInputLabel'>
					<LabelCopy className='TEFileInputCopy'>
						<LabelIcon className='TEFileInputIcon' />
						{labelCopy}
					</LabelCopy>
					<Input
						{...rest}
						disabled={disabled}
						type='file'
						key={inputKey}
						onChange={onFileChange}
						className='TEFileInputInput'
					/>
				</Label>
				<ClearButton
					onClick={handleClearInput}
					disabled={disabled}
					className='TEFileInputClearButton'
				>
					<ButtonIcon className='TEFileInputClearIcon' />
				</ClearButton>
			</InputWrapper>
			{errorData && errorData.error && (
				<ErrorMessage className='TEFileInputErrorMessage'>{errorData.message}</ErrorMessage>
			)}
		</Wrapper>
	)
}

TEFileInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	accept: PropTypes.string, //OS Hint of file type for dialog - NOT safety check of type
	// pattern: PropTypes.RegExp, //This is the actual strict catch. Regex // Don't know regex proptype
	disabled: PropTypes.bool,
}

export default TEFileInput
