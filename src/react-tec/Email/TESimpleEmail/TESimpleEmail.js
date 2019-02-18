//
//TE Version 0.1.0
//

import React from 'react';
//import PropTypes from 'prop-types';
import { Box, Item, Span } from 'react-html-email'

import TEEmailLayout from './../TEEmailLayout'

import styles from './styles'

//Reference : http://www.mhschool.com/ss/ca/images/img_g3_personalletter.gif
const TESimpleEmail = (props) => {
	const {
		emailTitle,
		title,
		subtitle,
		body,
		closing,
		signature,
	} = props

	return (
		<TEEmailLayout emailTitle={emailTitle}>
			<Box width="100%" cellPadding={20} style={styles.bodyContainer}>
				<Item>
					<Box width="100%" cellPadding={10}>
						{title &&
							<Item>
								<Span style={styles.bodyCopy}>{title}</Span>
							</Item>
						}
						{subtitle &&
							<Item>
								<Span style={styles.bodyCopy}>{subtitle}</Span>
							</Item>
						}
						{body &&
							<Item>
								<Span style={styles.bodyCopy}>{body}</Span>
							</Item>
						}
						{closing &&
							<Item>
								<Span style={styles.bodyCopy}>{closing}</Span>
							</Item>
						}
						{signature &&
							<Item>
								<Span style={styles.bodyCopy}>{signature}</Span>
							</Item>
						}
					</Box>
				</Item>
			</Box>
		</TEEmailLayout>
	);
}

TESimpleEmail.propTypes = {}

TESimpleEmail.defaultProps = {};

export default TESimpleEmail
