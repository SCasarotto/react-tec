//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Label } from './styledComponents'

const TELabel = (props) => {
    const { children, required, ...rest } = props
    return (
        <Label {...rest}>
            {children}
            {required ? ' *' : ''}
        </Label>
    )
}

TELabel.propTypes = {
    labelText: PropTypes.string,
    style: PropTypes.object,
    htmlFor: PropTypes.string,
}

export default TELabel
