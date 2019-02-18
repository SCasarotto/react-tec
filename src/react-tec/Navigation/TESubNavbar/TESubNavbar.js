//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'

import TENavLink from './../TENavLink'

import styles from './styles'

class TESubNavbar extends Component {
	render() {
		const { barStyle, links, rightComponent } = this.props

		return (
			<div style={{ ...styles.container, ...barStyle }}>
				<div style={styles.content}>
					<ul style={styles.navUl}>
						{links &&
							links.map((link) => {
								const { to, title } = link
								return (
									<li style={styles.navLi} key={to}>
										<TENavLink
											style={styles.link}
											wrapperStyle={styles.linkWrapper}
											activeStyle={styles.active}
											to={to}
										>
											{title}
										</TENavLink>
									</li>
								)
							})}
					</ul>
					{rightComponent}
				</div>
			</div>
		)
	}
}

TESubNavbar.propTypes = {}

TESubNavbar.defaultProps = {}

export default Radium(TESubNavbar)
