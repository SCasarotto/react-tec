import React, { useState, ChangeEvent, FormEvent } from 'react'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TEFileInputProps } from '../TEFileInput'
import { EditorPopup } from './EditorPopup'

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

export interface TEImageRowSrcObject {
	uid: string
	src: string
	// filename: string
	// fileEnding: string
	path: string
}
export interface TEImageRowOnRemoveData {
	uid: string
	path: string
	index: number
}
export interface TEImageRowProps extends TERowCustomProps, TELabelCustomProps, TEFileInputProps {
	labelForKey: string
	imgSrcArray: TEImageRowSrcObject[]
	maxNumber?: number
	filePattern?: RegExp
	// multiple?: false
	avatarEditorData?: any
	onRemove(data: TEImageRowOnRemoveData): Promise<any>
	onUpload({ file, editor }: { file?: File; editor: any }): Promise<any>
}
/**
 *
 * A component to manage uploading, downloading, and deleting images. This component contains a `TERow`, `TELabel`, `TEFileInput` and some additional components.
 *
 * The editor popup is based on [React Avatar Editor](https://github.com/mosch/react-avatar-editor#readme).
 *
 * Note: This component is a bit complex and may shift in API over time.
 *
 */
export const TEImageRow: React.FC<TEImageRowProps> = (props) => {
	const [editorVisible, setEditorVisible] = useState(false)
	const [file, setFile] = useState<File | undefined>(undefined)
	const [errorData, setErrorData] = useState({ error: false, message: '' })
	const [inputKey, setInputKey] = useState<string | number>(props.resetKey || 'inputKey')

	const handleClearImage = (data: TEImageRowOnRemoveData) => {
		props.onRemove(data)
	}
	const handleCancelEditor = () => {
		setErrorData({ error: false, message: '' })
		setFile(undefined)
		setInputKey(new Date().getTime())
		setEditorVisible(false)
	}
	const handleEditorSubmit = async (e: FormEvent<HTMLFormElement>, editor: any) => {
		//This could be passed out. Not sure it needs to.
		e.preventDefault()
		try {
			const { onUpload } = props

			const data = { file, editor }
			await onUpload(data)
			setEditorVisible(false)
			setErrorData({ error: false, message: '' })
			setFile(undefined)
			setInputKey(new Date().getTime())
		} catch (e) {
			console.log(e)
			setEditorVisible(false)
			setErrorData({ error: false, message: '' })
			setFile(undefined)
			setInputKey(new Date().getTime())
		}
	}

	const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { filePattern } = props
		const { files } = e.target

		if (!files) {
			console.error('No file provided to input.')
			return
		}

		const file = files[0]

		//Validate Files
		if (filePattern && filePattern instanceof RegExp) {
			if (!file.type.match(filePattern)) {
				console.warn('The selected file is not an image.')
				setErrorData({
					error: true,
					message: 'The selected file is not an image.',
				})
				setInputKey(new Date().getTime())
				return
			}
		}

		setErrorData({ error: false, message: '' })
		setFile(file)
		setEditorVisible(true)
	}

	const {
		className = '',
		rowSize,
		last,
		title,
		imgSrcArray,
		maxNumber = 0,
		accept,
		disabled,
		required,
		labelForKey,
		avatarEditorData,
	} = props

	let labelText = title
	if (labelText && maxNumber > 1 && imgSrcArray) {
		labelText = `${title} (${imgSrcArray.length}/${maxNumber})`
	}

	return (
		<TERow rowSize={rowSize} last={last} className={`TEImageRow ${className}`}>
			{labelText && (
				<TELabel
					htmlFor={labelForKey}
					required={required}
					disabled={disabled}
					className='TEImageRowTitle'
				>
					{labelText}
				</TELabel>
			)}
			<ImageRowWrapper className='TEImageRowWrapper'>
				{imgSrcArray &&
					imgSrcArray.map((imgSrcData, index) => {
						const { src, uid, path } = imgSrcData
						return (
							<ImageWrapper key={uid} className='TEImageRowImageWrapper'>
								<a href={src} target='_blank' rel='noopener noreferrer'>
									<Image src={src} alt={uid} className='TEImageRowImage' />
								</a>
								<ClearImageButton
									onClick={() => handleClearImage({ uid, path, index })}
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
			{file && (
				<EditorPopup
					visible={editorVisible}
					file={file}
					onCancel={handleCancelEditor}
					onSubmit={handleEditorSubmit}
					className='TEImageRowPopup'
					avatarEditorData={avatarEditorData}
				/>
			)}
		</TERow>
	)
}

TEImageRow.defaultProps = {
	accept: 'image/*',
	filePattern: /image-*/,
}
