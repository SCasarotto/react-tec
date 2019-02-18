//
//Version 0.3.0
//

import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Radium from 'radium'
import AvatarEditor from 'react-avatar-editor'
import { FaUndo, FaRedo } from 'react-icons/fa'

import TEConfirm from './../../../../component/Popup/TEConfirm'
import TERow from './../../../../component/Form/TERow'
import TELabel from './../../../../component/Form/TELabel'
import TEButton from './../../../../component/Form/TEButton'

import styles from './styles'

class TEImageUpload extends Component {
	state = {
		editorScale: 1.1,
		rotation: 0,
	}

	render() {
		const { editorScale, rotation } = this.state
		const {
			visible,
			file,

			onCancel,
			onSubmit,
			onSubmitTitle,
		} = this.props

		return (
			<TEConfirm
				visible={visible}
				contentStyles={styles.content}
				title="Edit Image"
				// message
				leftOnClick={onCancel}
				leftButtonTitle="Cancel"
				rightOnClick={() => onSubmit(this.refs.editor)}
				rightButtonTitle={onSubmitTitle}
			>
				<div style={styles.container}>
					<TERow style={styles.rowStyles}>
						<AvatarEditor
							ref="editor"
							image={file}
							width={300}
							height={300}
							border={20}
							// borderRadius={editorRadius}
							color={[255, 255, 255, 0.6]} // RGBA
							scale={editorScale}
							rotate={rotation}
						/>
					</TERow>
					<TERow style={styles.rowStyles}>
						<TELabel labelText="Zoom" htmlFor="scale" />
						<input
							name="scale"
							id="scale"
							type="range"
							onChange={(e) => {
								const editorScale = Number(e.target.value)
								this.setState({ editorScale })
							}}
							min="0.5"
							max="2.5"
							step="0.01"
							value={editorScale}
							style={styles.slider}
						/>
					</TERow>
					<TERow style={styles.rowStyles}>
						<TELabel labelText="Rotate" />
						<div style={styles.rotateButtonWrapper}>
							<TEButton
								onClick={() => {
									this.setState({ rotation: rotation + 90 })
								}}
								style={styles.rotationButton}
							>
								<FaRedo style={styles.rotationIcon} />
							</TEButton>
							<TEButton
								onClick={() => {
									this.setState({ rotation: rotation - 90 })
								}}
								style={styles.rotationButton}
							>
								<FaUndo style={styles.rotationIcon} />
							</TEButton>
						</div>
					</TERow>
				</div>
			</TEConfirm>
		)
	}
}

TEImageUpload.propTypes = {}

TEImageUpload.defaultProps = {
	onSubmitTitle: 'Submit',
}

export default Radium(TEImageUpload)
