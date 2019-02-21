//
// Version 0.3.0
//

import React, { useState } from 'react'
import PropTypes from 'prop-types'

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

const TEFileInput = (props) => {
    const [active, setActive] = useState(false)
    const [fileArray, setFileArray] = useState([])
    const [errorData, setErrorData] = useState({ error: false, message: '' })
    const [inputKey, setInputKey] = useState(props.resetKey || 'inputKey')

    const onFileChange = (e, droppedFiles) => {
        const { pattern, onChange } = props
        const files = e.target.files || droppedFiles

        if (!files) {
            console.error('No file provided to input.')
            return
        }

        //Validate Files
        if (pattern && pattern instanceof RegExp) {
            for (let i = 0; i < files.length; i++) {
                if (!files[i].type.match(pattern)) {
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
        onChange(files)

        // const readFile = (file) => {
        //     const { name } = file
        //     const reader = new FileReader()

        //     reader.onload = (e) => {
        //         const { fileArray } = this.state
        //         const updateFileArray = [...fileArray, { name, value: reader.result }]
        //         this.setState({
        //             fileArray: updateFileArray,
        //             error: false,
        //             errorMessage: '',
        //         })
        //         onChange(updateFileArray)
        //     }

        //     reader.readAsDataURL(file)
        // }

        // for (let i = 0; i < files.length; i++) {
        //     readFile(files[i])
        // }
    }
    const onDragEnter = (e) => setActive(true)
    const onDragLeave = (e) => setActive(false)
    const onDragOver = (e) => e.preventDefault()
    const onDrop = (e) => {
        e.preventDefault()
        setActive(false)
        onFileChange(e, e.dataTransfer.files)
    }
    const handleClearInput = () => {
        setInputKey(new Date().getTime()) //This will reset the input
        setFileArray([])
        setErrorData({
            error: false,
            message: '',
        })
    }

    const { inputRef, disabled, className, ...rest } = props

    let labelCopy = 'Choose a file...'
    if (fileArray && fileArray.length === 1) {
        labelCopy = fileArray[0].name
    } else if (fileArray && fileArray.length > 1) {
        labelCopy = `${fileArray.length} files selected`
    }

    return (
        <Wrapper className={className}>
            <InputWrapper
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDrop={onDrop}
                active={active}
                disabled={disabled}
            >
                <Label active={active} disabled={disabled}>
                    <LabelCopy>
                        <LabelIcon />
                        {labelCopy}
                    </LabelCopy>
                    <Input
                        {...rest}
                        disabled={disabled}
                        type="file"
                        key={inputKey}
                        onChange={onFileChange}
                    />
                </Label>
                <ClearButton onClick={handleClearInput} disabled={disabled}>
                    <ButtonIcon />
                </ClearButton>
            </InputWrapper>
            {errorData && errorData.error && <ErrorMessage>{errorData.message}</ErrorMessage>}
        </Wrapper>
    )
}

TEFileInput.propTypes = {
    style: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    accept: PropTypes.string, //OS Hint of file type for dialog - NOT safety check of type
    // pattern: PropTypes.RegExp, //This is the actual strict catch. Regex // Don't know regex proptype
    id: PropTypes.string,
    disabled: PropTypes.bool,
}

export default TEFileInput
