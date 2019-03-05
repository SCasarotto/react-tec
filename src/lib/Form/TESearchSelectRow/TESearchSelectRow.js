//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'
import { PowerSelect, PowerSelectMultiple } from 'react-power-select'
// import 'react-power-select/dist/react-power-select.css'

import TELabel from './../TELabel'
import TERow from './../TERow'

// import { } from './styledComponents'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

const TESearchSelectRow = (props) => {
    const {
        //Row
        size,
        last,
        className,

        //Label
        title,
        required,

        //Input
        type,
        value,

        //Both
        labelForKey,
        disabled,

        ...rest
    } = props

    return (
        <TERow size={size} last={last} className={className} disabled={disabled}>
            <TELabel htmlFor={labelForKey} required={required} disabled={disabled}>
                {title}
            </TELabel>
            {type === 'single' && (
                <PowerSelect selected={value} id={labelForKey} disabled={disabled} {...rest} />
            )}
            {type === 'multi' && (
                <PowerSelectMultiple
                    selected={value}
                    id={labelForKey}
                    disabled={disabled}
                    {...rest}
                />
            )}
        </TERow>
    )
}

TESearchSelectRow.propTypes = {
    //Row
    size: PropTypes.string,
    last: PropTypes.bool,

    //Input
    type: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onChangeKey: PropTypes.string,

    //Both
    labelForKey: PropTypes.string,
}

TESearchSelectRow.defaultProps = {
    type: 'single',
    searchEnabled: true,
}

export default TESearchSelectRow
