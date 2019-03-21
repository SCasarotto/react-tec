//
//TE Version 0.1.0
//

import React from 'react'
import PropTypes from 'prop-types'
import { Box, Email, Image, Item, Span, A } from 'react-html-email'

import settings from './../../../config/settings'
import styles from './styles'

const TEEmailLayout = (props) => {
	let baseUrl = ''
	if (settings.dev){
		baseUrl = settings.DEVELOPMENT.BASE_URL + '/misc/Email/'
	}else if (settings.staging){
		baseUrl = 'http://padscouts-staging.com.s3-website-us-east-1.amazonaws.com/misc/Email/'
	}else{
		baseUrl = settings.PRODUCTION.BASE_URL + '/misc/Email/'
	}

	const {
		emailTitle,
		headCSS,
		children
	} = props

	return (
		<Email title={emailTitle} headCSS={headCSS} cellSpacing={15}>
			<Item>
				<Box width="100%" style={styles.container} cellSpacing={30}>
					{/*Header*/}
					<Item>
						<Box width="100%">
							<Item align="center">
								<A href="https://www.padscouts.com/">
									<Image
										src={baseUrl + 'logo.png'}
										width={150}
										height={32}
										alt="PadScouts"
									/>
								</A>
							</Item>
						</Box>
					</Item>
					{/*Body*/}
					<Item>
						{children}
					</Item>
					{/*Footer*/}
					<Item>
						<Box width="100%">
							<Item align="center">
								<A href="https://www.padscouts.com/">
									<Image
										src={baseUrl + 'logo.png'}
										width={150}
										height={32}
										alt="PadScouts"
									/>
								</A>
							</Item>
						</Box>
					</Item>
					<Item>
						<Box width="100%" cellPadding={0} cellSpacing={10}>
							<Item align="center">
								<Span style={styles.subFooterCopy}>Let us know how we can help. <A href="mailto:support@padscouts.com" style={styles.supportEmailLink}>support@padscouts.com</A></Span>
							</Item>
							<Item align="center">
								<Span style={styles.subFooterCopy}>Copyright {new Date().getFullYear()} | PadScouts - ALL RIGHTS RESERVED</Span>
							</Item>
							<Item align="center">
								<Span style={styles.subFooterCopy}>Don't want to receive more emails? <A href="https://www.padscouts.com/unsubscribe" style={styles.unsubscribeLink}>unsubscribe</A></Span>
							</Item>
						</Box>
					</Item>
				</Box>
			</Item>
		</Email>
	)
}

TEEmailLayout.propTypes = {
	unsubscribe : PropTypes.bool
}

TEEmailLayout.defaultProps = {
	unsubscribe : true
}

export default TEEmailLayout
