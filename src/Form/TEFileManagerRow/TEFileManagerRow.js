//
//TE Version 0.3.0
//

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
        //Row
        size,
        last,
        className,

        //Label
        title,

        //Input
        fileSrc,
        maxNumber,
        accept,
        pattern,
        disabled,

        onRemove,

        //Both
        required,
        labelForKey,
    } = props

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
        <WrapperRow size={size} last={last} className={className}>
            <TELabel
                htmlFor={labelForKey}
                labelText={labelText}
                required={required}
                disabled={disabled}
            />
            <FileRowWrapper>
                {fileSrcArray &&
                    fileSrcArray.map((imgSrcData) => {
                        const { src, uid, filename, fileEnding, path } = imgSrcData
                        return (
                            <FileWrapper key={uid}>
                                <FileName>
                                    {filename}.{fileEnding}
                                </FileName>
                                <DownloadFileButton
                                    href={src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={uid}
                                    download={filename}
                                >
                                    <DownloadImageButtonIcon />
                                </DownloadFileButton>
                                <ClearFileButton onClick={() => onRemove({ uid, path })}>
                                    <ClearFileButtonIcon />
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
