//
//TE Version 0.3.0
//

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TEFileInput from './../TEFileInput'

//import {} from './styledComponents'

const TEFileRow = (props) => {
    const [inputKey, setInputKey] = useState('inputKey')

    const handleFileClick = (event) => {
        setInputKey(new Date().getTime())
    }

    const {
        //Row
        size,
        last,
        className,

        //Label
        title,

        //Input
        onChange,
        accept,
        multiple,
        disabled,

        //Both
        required,
        labelForKey,

        ...rest
    } = props

    return (
        <TERow size={size} last={last} className={className}>
            <TELabel
                htmlFor={labelForKey}
                labelText={title}
                required={required}
                disabled={disabled}
            />
            <TEFileInput
                resetKey={inputKey} //Used to reset the input.
                onChange={onChange}
                accept={accept}
                onClick={handleFileClick}
                id={labelForKey}
                multiple={multiple}
                disabled={disabled}
                {...rest}
            />
        </TERow>
    )
}

TEFileRow.propTypes = {
    //Row
    rowStyles: PropTypes.object,
    size: PropTypes.string,
    last: PropTypes.bool,

    //Input
    inputStyles: PropTypes.object,
    onChange: PropTypes.func,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    onChangeKey: PropTypes.string,
    disabled: PropTypes.bool,

    //Both
    labelForKey: PropTypes.string,
}

TEFileRow.defaultProps = {}

export default TEFileRow
