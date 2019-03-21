//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

// import 'react-power-select/dist/react-power-select.css'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TESearchSelectInput from './../TESearchSelectInput'

// import { } from './styledComponents'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

const TESearchSelectRow = (props) => {
    const { size, last, className, title, labelForKey, ...rest } = props

    return (
        <TERow size={size} last={last} className={className} required={rest.required}>
            <TELabel htmlFor={labelForKey} required={rest.required} disabled={rest.disabled}>
                {title}
            </TELabel>
            <TESearchSelectInput id={labelForKey} {...rest} />
        </TERow>
    )
}

TESearchSelectRow.propTypes = {
    //Row
    size: PropTypes.string,
    last: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.string,
    labelForKey: PropTypes.string,
}

TESearchSelectRow.defaultProps = {
    type: 'single',
    searchEnabled: true,
}

export default TESearchSelectRow
