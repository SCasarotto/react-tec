import React, { useState, ChangeEvent } from 'react'

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

export interface TEFileInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	onChange?(files: FileList): void
	placeholder?: string
	hideClearButton?: boolean
	filePattern?: RegExp
	resetKey?: string
}
/**
 *
 * A stylized `<input type="file"/>` with the ability to drag and drop and regex test file type.
 *
 * Outside of the props below, additional props are passed directly to the input so reference [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).
 *
 */
export const TEFileInput = React.forwardRef<HTMLInputElement, TEFileInputProps>((props, ref) => {
	const [active, setActive] = useState(false)
	const [fileArray, setFileArray] = useState<FileList | undefined>()
	const [errorData, setErrorData] = useState({ error: false, message: '' })
	const [inputKey, setInputKey] = useState<string | number>(props.resetKey || 'inputKey')

	const onFileChange = (files: FileList | null) => {
		const { filePattern, onChange } = props

		if (!files) {
			console.error('No file provided to input.')
			return
		}

		//Validate Files
		if (filePattern && filePattern instanceof RegExp) {
			for (let i = 0; i < files.length; i++) {
				if (!files[i].type.match(filePattern)) {
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
		if (onChange) {
			onChange(files)
		}
	}
	const onDragEnter = () => setActive(true)
	const onDragLeave = () => setActive(false)
	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()
	const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setActive(false)
		onFileChange(e.dataTransfer.files)
	}
	const handleClearInput = () => {
		setInputKey(new Date().getTime()) //This will reset the input
		setFileArray(undefined)
		setErrorData({
			error: false,
			message: '',
		})
	}

	const {
		disabled,
		className = '',
		placeholder = 'Choose a file...',
		hideClearButton = false,
		...rest
	} = props

	let labelCopy = placeholder
	if (fileArray && fileArray.length === 1) {
		labelCopy = fileArray[0].name
	} else if (fileArray && fileArray.length > 1) {
		labelCopy = `${fileArray.length} files selected`
	}

	return (
		<Wrapper className={`TEFileInput ${className}`}>
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
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							onFileChange(e.target.files)
						}
						className='TEFileInputInput'
						ref={ref}
					/>
				</Label>
				{!hideClearButton && (
					<ClearButton
						onClick={handleClearInput}
						disabled={disabled}
						className='TEFileInputClearButton'
					>
						<ButtonIcon className='TEFileInputClearIcon' />
					</ClearButton>
				)}
			</InputWrapper>
			{errorData && errorData.error && (
				<ErrorMessage className='TEFileInputErrorMessage'>{errorData.message}</ErrorMessage>
			)}
		</Wrapper>
	)
})
