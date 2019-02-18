//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'

import PanelWrapper from './../PanelWrapper'
import Panel from './../Panel'
import TEButton from './../../Form/TEButton'
import styles from './styles'

class ErrorLoadingAlert extends Component {
	render() {
		const { title, message } = this.props
		return (
			<PanelWrapper style={styles.container}>
				<Panel containerStyle={styles.errorLoadingContainer}>
					<h1 style={styles.errorTitle}>{title}</h1>
					<p style={styles.errorMessage}>{message}</p>
				</Panel>
			</PanelWrapper>
		)
	}
}

ErrorLoadingAlert.propTypes = {}

ErrorLoadingAlert.defaultProps = {}

export default Radium(ErrorLoadingAlert)
