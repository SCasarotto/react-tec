//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { FaUpload, FaRegWindowClose } from 'react-icons/fa'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TEButton from './../TEButton'
import EditorPopup from './EditorPopup'

import styles from './styles'

class TEImageRow extends Component {
    state = { error: false, errorMessage: '', editorVisible: false, file: undefined }

    handleClearImage = (data) => {
        this.props.onRemove(data)
    }
    handleCancelEditor = () => {
        this.setState({
            editorVisible: false,
            file: undefined,
        })
        this.refs.input.value = null
    }
    handleEditorSubmit = (editor) => {
        const { file } = this.state
        const { onUpload } = this.props

        const data = { file, editor }
        onUpload(data)
            .then(() => {
                this.setState({
                    error: false,
                    errorMessage: '',
                    editorVisible: false,
                    file: undefined,
                })

                if (this.refs.input) {
                    this.refs.input.value = null
                }
            })
            .catch((error) => {
                console.log(error)
                this.setState({
                    error: false,
                    errorMessage: '',
                    editorVisible: false,
                    file: undefined,
                })

                if (this.refs.input) {
                    this.refs.input.value = null
                }
            })
    }

    onFileChange = (e) => {
        const { pattern } = this.props
        const { files } = e.target

        if (!files) {
            console.error('No file provided to input.')
            return
        }

        const file = files[0]

        //Validate Files
        console.log(pattern)
        if (pattern && pattern instanceof RegExp) {
            if (!file.type.match(pattern)) {
                console.warn('The selected file is not an image.')
                this.setState({
                    error: true,
                    errorMessage: 'The selected file is not an image.',
                })
                this.refs.input.value = null
                return
            }
        }

        this.setState({
            error: false,
            errorMessage: '',
            editorVisible: true,
            file,
        })
    }

    render() {
        const { error, errorMessage, editorVisible, file } = this.state
        const {
            //Row
            rowStyles,
            size,
            last,

            //Label
            labelStyles,
            title,

            //Input
            imgSrc,
            // inputStyles,
            maxNumber,
            accept,
            disabled,

            //Both
            required,
            labelForKey,
        } = this.props

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
            <TERow size={size} last={last} style={rowStyles}>
                <TELabel
                    htmlFor={labelForKey}
                    labelText={labelText}
                    style={labelStyles}
                    required={required}
                    disabled={disabled}
                />
                <div style={styles.imageRowWrapper}>
                    {imgSrcArray &&
                        imgSrcArray.map((imgSrcData) => {
                            const { src, uid, path } = imgSrcData
                            return (
                                <div style={styles.imageWrapper} key={uid}>
                                    <a href={src} target="_blank" rel="noopener noreferrer">
                                        <img src={src} alt={uid} style={styles.image} />
                                    </a>
                                    <TEButton
                                        style={styles.clearImageButton}
                                        onClick={() => this.handleClearImage({ uid, path })}
                                    >
                                        <FaRegWindowClose style={styles.clearImageButtonIcon} />
                                    </TEButton>
                                </div>
                            )
                        })}
                    {(!imgSrcArray || (imgSrcArray && imgSrcArray.length < maxNumber)) &&
                        !disabled && (
                            <label style={styles.label(disabled)}>
                                <div style={styles.uploadIconWrapper}>
                                    <FaUpload style={styles.uploadIcon} />
                                </div>
                                <input
                                    type="file"
                                    ref="input"
                                    accept={accept}
                                    style={styles.input}
                                    onChange={this.onFileChange}
                                />
                            </label>
                        )}
                </div>
                {error && <span style={styles.errorMessage}>{errorMessage}</span>}
                <EditorPopup
                    visible={editorVisible}
                    file={file}
                    onCancel={this.handleCancelEditor}
                    onSubmit={this.handleEditorSubmit}
                />
            </TERow>
        )
    }
}

TEImageRow.propTypes = {
    //Row
    rowStyles: PropTypes.object,
    size: PropTypes.string,
    last: PropTypes.bool,

    //Input
    // inputStyles: PropTypes.object,
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
    maxNumber: 1,
}

export default Radium(TEImageRow)
