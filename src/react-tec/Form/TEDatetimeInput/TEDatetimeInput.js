//
//TE Version 0.2.1
//
//
// - Added autocomplete false by default
//

import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import DatePicker from 'react-datepicker'

//import styles from './styles'

class TEDatetimeInput extends Component {
    determineValue(value) {
        //Safety for loading data
        if (!value) {
            return null
        }
        if (typeof value !== 'number') {
            return null
        }
        return new Date(value)
    }

    render() {
        const { value, placeholder, ...rest } = this.props
        return (
            <DatePicker
                selected={this.determineValue(value)}
                placeholderText={placeholder}
                {...rest}
            />
        )
    }
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

export default Radium(TEDatetimeInput)
