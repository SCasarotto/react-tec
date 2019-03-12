//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TEDatetimeInput from './../TEDatetimeInput'

//import styles from './styles'

const TEDatetimeRow = (props) => {
    const handleInputChange = (date) => {
        props.onChange(date && date.valueOf())
    }

    const {
        size,
        last,
        className,

        title,
        labelForKey,

        inputClass,
        onChange,
        value,
        required,

        ...rest
    } = props

    return (
        <TERow size={size} last={last} className={className}>
            <TELabel htmlFor={labelForKey} required={required} disabled={rest.disabled}>
                {title}
            </TELabel>
            <TEDatetimeInput
                value={value}
                onChange={handleInputChange}
                id={labelForKey}
                className={inputClass}
                {...rest}
            />
        </TERow>
    )
}

TEDatetimeRow.propTypes = {
    size: PropTypes.string,
    last: PropTypes.bool,
    inputClass: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    value: PropTypes.number,
    labelForKey: PropTypes.string,
    required: PropTypes.bool,
}

export default TEDatetimeRow
