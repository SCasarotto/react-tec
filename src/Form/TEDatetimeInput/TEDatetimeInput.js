//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import DatePicker from 'react-datepicker'

const determineValue = (value) => {
    if (!value) {
        //Without this a value of '' was causing an error...
        return null
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return new Date(value)
    }
    return value
}
const TEDatetimeInput = (props) => {
    const { value, placeholder, ...rest } = props
    return <DatePicker selected={determineValue(value)} placeholderText={placeholder} {...rest} />
}

TEDatetimeInput.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
}

TEDatetimeInput.defaultProps = {
    autoComplete: 'off',
}

export default TEDatetimeInput
