//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'

import styles from './styles'

class TitleBar extends Component {
	render() {
		const {
			barStyle,

			title,
			titleStyle,
			leftComponent,

			subtitle,
			subtitleStyle,
			rightComponent,
		} = this.props

		return (
			<div style={{ ...styles.container, ...barStyle }}>
				<div style={styles.content}>
					{title && <h1 style={{ ...styles.title, ...titleStyle }}>{title}</h1>}
					{leftComponent && <div style={styles.componentContainer}>{leftComponent}</div>}
					{subtitle && (
						<h2 style={{ ...styles.subtitle, ...subtitleStyle }}>{subtitle}</h2>
					)}
					{rightComponent && (
						<div style={styles.componentContainer}>{rightComponent}</div>
					)}
				</div>
			</div>
		)
	}
}

TitleBar.propTypes = {}

TitleBar.defaultProps = {}

export default Radium(TitleBar)
