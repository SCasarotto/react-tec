//
//Version 0.3.0
//

import React, { useState, useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'

import TEPopupForm from '../../../Popup/TEPopupForm'
import TELabel from '../../TELabel'

import {
	Container,
	Row,
	RotateButtonWrapper,
	RotateButton,
	UndoRotationIcon,
	RedoRotationIcon,
} from './styledComponents'

const TEImageUpload = (props) => {
	const [editorScale, setEditorScale] = useState(1.1)
	const [rotation, setRotation] = useState(0)
	const editor = useRef(null)

	const {
		className = '',
		visible,
		file,
		onCancel,
		onSubmit,
		onSubmitTitle,
		avatarEditorData,
	} = props

	return (
		<TEPopupForm
			visible={visible}
			onSubmit={() => onSubmit(editor.current)}
			onClose={onCancel}
			onCancelTitle="Cancel"
			onSubmitTitle={onSubmitTitle}
			className={`TEEditorPopup ${className}`}>
			<Container className="TEImageRowPopupContainer">
				<Row className="TEImageRowPopupRow">
					<AvatarEditor
						ref={editor}
						image={file}
						width={300}
						height={300}
						border={20}
						// borderRadius={editorRadius}
						color={[255, 255, 255, 0.6]} // RGBA
						scale={editorScale}
						rotate={rotation}
						{...avatarEditorData}
					/>
				</Row>
				<Row className="TEImageRowPopupRow">
					<TELabel
						htmlFor="scale"
						className="TEImageRowPopupZoomTitle">
						Zoom
					</TELabel>
					<input
						name="scale"
						id="scale"
						type="range"
						onChange={(e) => setEditorScale(Number(e.target.value))}
						min="0.5"
						max="2.5"
						step="0.01"
						value={editorScale}
						className="TEImageRowPopupZoomSlider"
					/>
				</Row>
				<Row className="TEImageRowPopupRow">
					<TELabel className="TEImageRowPopupRotateLabel">
						Rotate
					</TELabel>
					<RotateButtonWrapper className="TEImageRowPopupRotateButtonWrapper">
						<RotateButton
							className="TEImageRowPopupRotateButton"
							onClick={() => setRotation(rotation + 90)}>
							<UndoRotationIcon className="TEImageRowPopupRotateIcon" />
						</RotateButton>
						<RotateButton
							className="TEImageRowPopupRotateButton"
							onClick={() => setRotation(rotation - 90)}>
							<RedoRotationIcon className="TEImageRowPopupRotateIcon" />
						</RotateButton>
					</RotateButtonWrapper>
				</Row>
			</Container>
		</TEPopupForm>
	)
}

TEImageUpload.defaultProps = {
	onSubmitTitle: 'Submit',
}

export default TEImageUpload