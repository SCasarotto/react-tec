//
//TE Version 0.2.0
//

import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Radium from 'radium'
import { matchPath } from 'react-router'

import TENavLink from './../TENavLink'
// import TESVG from './../../TESVG'

// import images from './../../../config/images'
import styles from './styles'

class TESideNavLink extends Component {
	isActive = () => {
		const { location, activePath } = this.props
		return matchPath(location.pathname, { path: activePath })
	}
	render() {
		const {
			title,
			to,
			// hasAccess,
		} = this.props

		return (
			<li
				style={styles.li}
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<TENavLink
					style={styles.link}
					wrapperStyle={styles.linkWrapper}
					activeStyle={styles.active}
					isActive={this.isActive}
					to={to}
				>
					<span style={styles.titleSapn}>{title}</span>
					{/*!hasAccess &&
						<TESVG
							path={images.Portal.lock}
							primaryAxis='x'
							style={styles.icon}
							wrapperStyle={styles.iconWrapper}
						/>
					*/}
				</TENavLink>
			</li>
		)
	}
}

TESideNavLink.propTypes = {}

TESideNavLink.defaultProps = {
	hasAccess: false,
}

export default Radium(TESideNavLink)
