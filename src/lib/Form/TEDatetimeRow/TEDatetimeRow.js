//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TEDatetimeInput from './../TEDatetimeInput'

//import styles from './styles'

class TEDatetimeRow extends Component {
    handleInputChange = (date) => {
        this.props.onChange(date && date.valueOf())
    }

    render() {
        const {
            rowStyles,
            size,
            last,

            labelStyles,
            title,
            labelForKey,

            inputClass,
            onChange,
            value,
            required,

            ...rest
        } = this.props

        return (
            <TERow size={size} last={last} style={rowStyles}>
                <TELabel
                    htmlFor={labelForKey}
                    labelText={title}
                    style={labelStyles}
                    required={required}
                    disabled={rest.disabled}
                />
                <TEDatetimeInput
                    value={value}
                    onChange={this.handleInputChange}
                    id={labelForKey}
                    className={inputClass}
                    {...rest}
                />
            </TERow>
        )
    }
}

TEDatetimeRow.propTypes = {
    rowStyles: PropTypes.object,
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

TEDatetimeRow.defaultProps = {}

export default Radium(TEDatetimeRow)
