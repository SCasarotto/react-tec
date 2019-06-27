import React from 'react'

import { Button } from './styledComponents'

const TEButton = (props) => <Button {...props} />

TEButton.defaultProps = {
	type: 'button',
}

export default TEButton
