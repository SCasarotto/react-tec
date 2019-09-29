import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TELabel from './../TELabel'

import {
	WrapperRow,
	FileRowWrapper,
	FileWrapper,
	FileName,
	DownloadFileButton,
	DownloadImageButtonIcon,
	ClearFileButton,
	ClearFileButtonIcon,
	Input,
} from './styledComponents'

const TEFileManagerRow = (props) => {
	const [inputKey, setInputKey] = useState('inputKey')

	const onFileChange = (fileList) => {
		const { onUpload } = props
		onUpload(fileList)
			.then(() => {
				setInputKey(new Date().getTime())
			})
			.catch((error) => {
				console.log(error)
				setInputKey(new Date().getTime())
			})
	}

	const {
		size,
		last,
		className = '',
		title,
		fileSrcArray,
		maxNumber,
		accept,
		pattern,
		disabled,
		onRemove,
		required,
		labelForKey,
	} = props

	let labelText = title
	if (maxNumber > 1 && fileSrcArray) {
		labelText = `${title} (${fileSrcArray.length}/${maxNumber})`
	}

	return (
		<WrapperRow size={size} last={last} className={`TEFileManagerRow ${className}`}>
			<TELabel
				htmlFor={labelForKey}
				required={required}
				disabled={disabled}
				className='TEFileManagerRowTitle'
			>
				{labelText}
			</TELabel>
			<FileRowWrapper className='TEFileManagerRowWrapper'>
				{fileSrcArray &&
					fileSrcArray.map((imgSrcData, index) => {
						const { src, uid, filename, fileEnding, path } = imgSrcData
						return (
							<FileWrapper key={uid} className='TEFileManagerFileRow'>
								<FileName className='TEFileManagerFileName'>
									{filename}.{fileEnding}
								</FileName>
								{src && (
									<DownloadFileButton
										href={src}
										target='_blank'
										rel='noopener noreferrer'
										key={uid}
										download={filename}
										className='TEFileManagerDownloadButton'
									>
										<DownloadImageButtonIcon className='TEFileManagerDownloadIcon' />
									</DownloadFileButton>
								)}
								<ClearFileButton
									onClick={() => onRemove({ uid, path, index })}
									className='TEFileManagerClearButton'
								>
									<ClearFileButtonIcon className='TEFileManagerClearIcon' />
								</ClearFileButton>
							</FileWrapper>
						)
					})}
				{(maxNumber === 0 ||
					!fileSrcArray ||
					(fileSrcArray && fileSrcArray.length < maxNumber)) && (
					<Input
						key={inputKey} //Used to reset the input
						id={labelForKey}
						onChange={onFileChange}
						disabled={disabled}
						required={required}
						// multiple={maxNumber === 0 || maxNumber > 1} //For simplicity making it a single file
						accept={accept}
						pattern={pattern}
						className='TEFileManagerInput'
					/>
				)}
			</FileRowWrapper>
		</WrapperRow>
	)
}

TEFileManagerRow.propTypes = {
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

TEFileManagerRow.defaultProps = {
	accept: '.',
	pattern: /./,
	maxNumber: 0,
	multiple: false, //Not implemented for multiple so defaulting for safety
}

export default TEFileManagerRow
