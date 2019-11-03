import React, { useState } from 'react'

import { TELabel, TELabelCustomProps } from '../TELabel'

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
import { TERowCustomProps } from '../TERow'
import { TEInputProps } from '../TEInput'

//TEFileManagerRow ✅
interface TEFileManagerRowSrcObject {
	uid: string
	src: string
	filename: string
	fileEnding: string
	path: string
}
interface TEFileManagerRowOnRemoveData {
	uid: string
	path: string
	index: number
}
interface TEFileManagerRowProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TEInputProps {
	labelForKey: string
	fileSrcArray: TEFileManagerRowSrcObject[]
	maxNumber: number
	filePattern?: RegExp
	// multiple?: false
	onRemove(data: TEFileManagerRowOnRemoveData): Promise<any>
	onUpload(files: FileList): Promise<any>
}
export const TEFileManagerRow: React.FC<TEFileManagerRowProps> = (props) => {
	const [inputKey, setInputKey] = useState<string | number>('inputKey')

	const onFileChange = (fileList: FileList) => {
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
		rowSize,
		last,
		className = '',
		title,
		fileSrcArray,
		maxNumber,
		accept,
		filePattern,
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
		<WrapperRow
			rowSize={rowSize}
			last={last}
			className={`TEFileManagerRow ${className}`}>
			<TELabel
				htmlFor={labelForKey}
				required={required}
				disabled={disabled}
				className="TEFileManagerRowTitle">
				{labelText}
			</TELabel>
			<FileRowWrapper className="TEFileManagerRowWrapper">
				{fileSrcArray &&
					fileSrcArray.map((imgSrcData, index) => {
						const {
							src,
							uid,
							filename,
							fileEnding,
							path,
						} = imgSrcData
						return (
							<FileWrapper
								key={uid}
								className="TEFileManagerFileRow"
								disabled={disabled}>
								<FileName
									className="TEFileManagerFileName"
									disabled={disabled}>
									{filename}.{fileEnding}
								</FileName>
								{src && (
									<DownloadFileButton
										href={src}
										target="_blank"
										rel="noopener noreferrer"
										key={uid}
										download={filename}
										className="TEFileManagerDownloadButton">
										<DownloadImageButtonIcon className="TEFileManagerDownloadIcon" />
									</DownloadFileButton>
								)}
								{!disabled && (
									<ClearFileButton
										onClick={() =>
											onRemove({ uid, path, index })
										}
										className="TEFileManagerClearButton">
										<ClearFileButtonIcon className="TEFileManagerClearIcon" />
									</ClearFileButton>
								)}
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
						filePattern={filePattern}
						className="TEFileManagerInput"
						hideClearButton
					/>
				)}
			</FileRowWrapper>
		</WrapperRow>
	)
}

TEFileManagerRow.defaultProps = {
	accept: '.',
	filePattern: /./,
	maxNumber: 0,
	// multiple: false, //Not implemented for multiple so defaulting for safety
}
