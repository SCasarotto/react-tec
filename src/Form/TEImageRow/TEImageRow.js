//
//TE Version 0.3.0
//

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import EditorPopup from './EditorPopup'

import {
	ImageRowWrapper,
	ImageWrapper,
	Image,
	ClearImageButton,
	ClearImageButtonIcon,
	Label,
	UploadIcon,
	Input,
	ErrorMessage,
} from './styledComponents'

const TEImageRow = (props) => {
	const [editorVisible, setEditorVisible] = useState(false)
	const [file, setFile] = useState(undefined)
	const [errorData, setErrorData] = useState({ error: false, message: '' })
	const [inputKey, setInputKey] = useState(props.resetKey || 'inputKey')

	const handleClearImage = (data) => {
		props.onRemove(data)
	}
	const handleCancelEditor = () => {
		setErrorData({ error: false, message: '' })
		setFile(undefined)
		setInputKey(new Date().getTime())
	}
	const handleEditorSubmit = (editor) => {
		//TODO: Test if loading this from above will cause errors
		// const { file } = this.state
		const { onUpload } = props

		const data = { file, editor }
		onUpload(data)
			.then(() => {
				setEditorVisible(false)
				setErrorData({ error: false, message: '' })
				setFile(undefined)
				setInputKey(new Date().getTime())
			})
			.catch((error) => {
				console.log(error)
				setEditorVisible(false)
				setErrorData({ error: false, message: '' })
				setFile(undefined)
				setInputKey(new Date().getTime())
			})
	}

	const onFileChange = (e) => {
		const { pattern } = props
		const { files } = e.target

		if (!files) {
			console.error('No file provided to input.')
			return
		}

		const file = files[0]

		//Validate Files
		if (pattern && pattern instanceof RegExp) {
			if (!file.type.match(pattern)) {
				console.warn('The selected file is not an image.')
				setErrorData({ error: true, message: 'The selected file is not an image.' })
				setInputKey(new Date().getTime())
				return
			}
		}

		setErrorData({ error: false, message: '' })
		setFile(file)
		setEditorVisible(true)
	}

	const {
		//Row
		className,
		size,
		last,

		//Label
		title,

		//Input
		imgSrc,
		maxNumber,
		accept,
		disabled,

		//Both
		required,
		labelForKey,
	} = props

	const imgSrcArray = []
	if (imgSrc) {
		for (const uid in imgSrc) {
			imgSrcArray.push({ ...imgSrc[uid], uid })
		}
	}

	let labelText = title
	if (maxNumber > 1 && imgSrcArray) {
		labelText = `${title} (${imgSrcArray.length}/${maxNumber})`
	}

	return (
		<TERow size={size} last={last} className={className}>
			<TELabel
				htmlFor={labelForKey}
				required={required}
				disabled={disabled}
				className='TEImageRowTitle'
			>
				{labelText}
			</TELabel>
			<ImageRowWrapper className='TEImageRowWrapper'>
				{imgSrcArray &&
					imgSrcArray.map((imgSrcData) => {
						const { src, uid, path } = imgSrcData
						return (
							<ImageWrapper key={uid} className='TEImageRowImageWrapper'>
								<a href={src} target='_blank' rel='noopener noreferrer'>
									<Image src={src} alt={uid} className='TEImageRowImage' />
								</a>
								<ClearImageButton
									onClick={() => handleClearImage({ uid, path })}
									className='TEImageRowClearButton'
								>
									<ClearImageButtonIcon className='TEImageRowClearIcon' />
								</ClearImageButton>
							</ImageWrapper>
						)
					})}
				{(maxNumber === 0 ||
					!imgSrcArray ||
					(imgSrcArray && imgSrcArray.length < maxNumber)) &&
					!disabled && (
						<Label disabled={disabled}>
							<div>
								<UploadIcon />
							</div>
							<Input
								key={inputKey} //Used to reset input
								type='file'
								accept={accept}
								onChange={onFileChange}
							/>
						</Label>
					)}
			</ImageRowWrapper>
			{errorData && errorData.error && (
				<ErrorMessage className='TEImageRowErrorMessage'>{errorData.message}</ErrorMessage>
			)}
			<EditorPopup
				visible={editorVisible}
				file={file}
				onCancel={handleCancelEditor}
				onSubmit={handleEditorSubmit}
				className='TEImageRowPopup'
			/>
		</TERow>
	)
}

TEImageRow.propTypes = {
	//Row
	size: PropTypes.string,
	last: PropTypes.bool,

	//Input
	onUpload: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	accept: PropTypes.string,
	// accept: PropTypes.Regexp, //Don't know protype for regex
	maxNumber: PropTypes.number,
	onChangeKey: PropTypes.string,
	disabled: PropTypes.bool,

	//Both
	labelForKey: PropTypes.string,
}

TEImageRow.defaultProps = {
	accept: 'image/*',
	pattern: /image-*/,
	maxNumber: 0,
}

export default TEImageRow
