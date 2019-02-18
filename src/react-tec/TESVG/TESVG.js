//
//TE Version 0.1.0
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import ReactSVG from 'react-svg'

import styles from './styles'

class TESVG extends Component {
	render() {
		const { wrapperStyle, primaryAxis, style, path, title } = this.props

		return (
			<div style={{ ...styles.svgWrapperStyle(title), ...wrapperStyle }} title={title}>
				<ReactSVG src={path} svgStyle={{ ...styles.svgStyle(primaryAxis), ...style }} />
			</div>
		)
	}
}

TESVG.propTypes = {
	style: PropTypes.object,
	wrapperStyle: PropTypes.object,
}

export default Radium(TESVG)
