//
//TE Version 0.3.0
//

//
// TODO:
// - Review good defaults
// - Setup good context provider
//

//Bug: https://github.com/nfl/react-helmet/issues/373#issuecomment-392650715

import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'

const TEHelmet = (props) => {
	const { charSet = 'utf-8', title = '', description = '', ...rest } = props

	return (
		<Helmet
			title={title}
			meta={[
				{
					name: 'charSet',
					content: charSet,
				},
				{
					name: 'description',
					content: description,
				},
			]}
			{...rest}
		/>
	)
}

TEHelmet.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default TEHelmet
