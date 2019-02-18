//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { FaFileDownload, FaRegWindowClose } from 'react-icons/fa'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TEFileInput from './../TEFileInput'
import TEButton from './../TEButton'

import styles from './styles'

class TEFileManagerRow extends Component {
    onFileChange = (fileArray) => {
        const { onUpload } = this.props
        const data = { fileArray }
        onUpload(data)
            .then(() => {
                if (this.refs.input && this.refs.input.handleClearInput) {
                    this.refs.input.handleClearInput()
                }
            })
            .catch((error) => {
                console.log(error)
                if (this.refs.input && this.refs.input.handleClearInput) {
                    this.refs.input.handleClearInput()
                }
            })
    }

    render() {
        const {
            //Row
            rowStyles,
            size,
            last,

            //Label
            labelStyles,
            title,

            //Input
            fileSrc,
            // inputStyles,
            maxNumber,
            accept,
            pattern,
            disabled,

            onRemove,

            //Both
            required,
            labelForKey,
        } = this.props

        const fileSrcArray = []
        if (fileSrc) {
            for (const uid in fileSrc) {
                fileSrcArray.push({ ...fileSrc[uid], uid })
            }
        }

        let labelText = title
        if (maxNumber > 1 && fileSrcArray) {
            labelText = `${title} (${fileSrcArray.length}/${maxNumber})`
        }

        return (
            <TERow size={size} last={last} style={{ ...styles.row, ...rowStyles }}>
                <TELabel
                    htmlFor={labelForKey}
                    labelText={labelText}
                    style={labelStyles}
                    required={required}
                    disabled={disabled}
                />
                <div style={styles.fileRowWrapper}>
                    {fileSrcArray &&
                        fileSrcArray.map((imgSrcData) => {
                            const { src, uid, filename, fileEnding, path } = imgSrcData
                            return (
                                <div style={styles.fileWrapper} key={uid}>
                                    <span style={styles.fileName}>
                                        {filename}.{fileEnding}
                                    </span>
                                    <a
                                        href={src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.downloadFileButton}
                                        key={uid}
                                        download={filename}
                                    >
                                        <FaFileDownload style={styles.downloadImageButtonIcon} />
                                    </a>
                                    <TEButton
                                        style={styles.clearFileButton}
                                        onClick={() => onRemove({ uid, path })}
                                    >
                                        <FaRegWindowClose style={styles.clearFileButtonIcon} />
                                    </TEButton>
                                </div>
                            )
                        })}
                    {(maxNumber === 0 ||
                        !fileSrcArray ||
                        (fileSrcArray && fileSrcArray.length < maxNumber)) && (
                        <TEFileInput
                            id={labelForKey}
                            style={styles.input}
                            onChange={this.onFileChange}
                            disabled={disabled}
                            required={required}
                            // multiple={maxNumber === 0 || maxNumber > 1} //For simplicity making it a single file
                            accept={accept}
                            pattern={pattern}
                            ref="input"
                        />
                    )}
                </div>
            </TERow>
        )
    }
}

TEFileManagerRow.propTypes = {
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

TEFileManagerRow.defaultProps = {
    accept: '.',
    pattern: '.',
    maxNumber: 0,
}

export default Radium(TEFileManagerRow)
