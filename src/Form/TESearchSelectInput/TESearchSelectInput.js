//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'
import { PowerSelect, PowerSelectMultiple } from 'react-power-select'
// import 'react-power-select/dist/react-power-select.css'

// import { } from './styledComponents'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

const TESearchSelectInput = (props) => {
    const { type, value, ...rest } = props

    if (type === 'single') {
        return <PowerSelect selected={value} {...rest} />
    }
    if (type === 'multi') {
        return <PowerSelectMultiple selected={value} {...rest} />
    }

    return <PowerSelect selected={value} {...rest} />
}

TESearchSelectInput.propTypes = {
    type: PropTypes.string,
}

TESearchSelectInput.defaultProps = {
    type: 'single',
    searchEnabled: true,
}

export default TESearchSelectInput
