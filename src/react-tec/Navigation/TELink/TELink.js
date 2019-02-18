//
//TE Version 0.2.0
//

import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Radium from 'radium'

import { Link } from 'react-router-dom'

import styles from './styles'

class TELink extends Component {
	render() {
		const { wrapperStyle, style, children, inline, ...rest } = this.props

		if (inline) {
			return (
				<span style={{ ...styles.linkWrapper, ...wrapperStyle }}>
					<Link style={{ ...styles.link, ...style }} {...rest}>
						{children}
					</Link>
				</span>
			)
		}

		return (
			<div style={{ ...styles.linkWrapper, ...wrapperStyle }}>
				<Link style={{ ...styles.link, ...style }} {...rest}>
					{children}
				</Link>
			</div>
		)
	}
}

TELink.propTypes = {}

TELink.defaultProps = {}

export default Radium(TELink)
