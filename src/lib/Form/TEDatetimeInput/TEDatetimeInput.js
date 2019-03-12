//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import DatePicker from 'react-datepicker'

// import { DPicker } from './styledComponents'

//TODO: Finish Component Styling

const determineValue = (value) => {
    //Safety for loading data
    if (!value || typeof value !== 'number') {
        return null
    }
    return new Date(value)
}
const TEDatetimeInput = (props) => {
    const { value, placeholder, ...rest } = props
    return <DatePicker selected={determineValue(value)} placeholderText={placeholder} {...rest} />
}

TEDatetimeInput.propTypes = {
    style: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    showTimeSelect: PropTypes.bool,
    dateFormat: PropTypes.string,
    disabled: PropTypes.bool,
}

TEDatetimeInput.defaultProps = {
    showTimeSelect: false,
    disabled: false,
    autoComplete: 'off',
}

export default TEDatetimeInput
