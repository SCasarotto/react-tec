import React from 'react'

import { Form } from './styledComponents'

const TEForm = (props) => {
	const { className = '', ...rest } = props
	return <Form className={`TEForm ${className}`} {...rest} />
}

export default TEForm
