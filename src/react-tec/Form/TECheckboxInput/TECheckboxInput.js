//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './styledComponents'

const TECheckboxInput = (props) => {
    return <Input {...props} type="checkbox" />
}

TECheckboxInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    id: PropTypes.string,
}

export default TECheckboxInput
