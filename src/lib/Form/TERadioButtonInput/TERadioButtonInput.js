//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './styledComponents'

const TERadioButtonInput = (props) => {
    const { style, ...rest } = props

    return <Input type="radio" {...rest} />
}

TERadioButtonInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    id: PropTypes.string,
}

export default TERadioButtonInput
