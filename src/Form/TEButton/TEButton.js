//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styledComponents'

const TEButton = (props) => <Button {...props} />

TEButton.defaultProps = {
	type: 'button',
}

export default TEButton
