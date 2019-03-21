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
    const {
        size,
        last,
        className,

        title,
        labelForKey,

        ...rest
    } = props

    return (
        <TERow size={size} last={last} className={className}>
            <TELabel htmlFor={labelForKey} required={rest.required} disabled={rest.disabled}>
                {title}
            </TELabel>
            <TEDatetimeInput id={labelForKey} {...rest} />
        </TERow>
    )
}

TEDatetimeRow.propTypes = {
    size: PropTypes.string,
    last: PropTypes.bool,
    labelForKey: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
}

export default TEDatetimeRow
