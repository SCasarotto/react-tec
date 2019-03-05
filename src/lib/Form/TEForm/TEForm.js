//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Form } from './styledComponents'

const TEForm = (props) => {
	const { children, ...rest } = props

	return <Form {...rest}>{children}</Form>
}

TEForm.propTypes = {
	onSubmit: PropTypes.func,
}

export default TEForm
