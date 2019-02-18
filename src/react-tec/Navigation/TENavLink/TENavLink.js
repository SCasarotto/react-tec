//
//TE Version 0.2.0
//

import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Radium from 'radium'

import { NavLink } from 'react-router-dom'

import styles from './styles'

class TENavLink extends Component {
	render() {
		const { wrapperStyle, style, children, ...rest } = this.props

		return (
			<div style={{ ...styles.linkWrapper, ...wrapperStyle }}>
				<NavLink style={{ ...styles.link, ...style }} {...rest}>
					{children}
				</NavLink>
			</div>
		)
	}
}

TENavLink.propTypes = {}

TENavLink.defaultProps = {}

export default Radium(TENavLink)
