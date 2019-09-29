import React from 'react'
import PropTypes from 'prop-types'

import { Container, SpinnerWrapper, Ring } from './styledComponents'

const TESpinner = (props) => {
	const renderRings = () => {
		const { size, innerColor, outerColor } = props
		let totalRings = 6

		switch (size) {
			case 'small':
				totalRings = 4
				break
			case 'medium':
				totalRings = 5
				break
			case 'large':
				totalRings = 6
				break
			default:
				break
		}

		let rings = []
		for (var i = 0; i < totalRings; i++) {
			rings.push(
				<Ring
					key={i}
					ringNumber={i}
					totalRings={totalRings}
					innerColor={innerColor}
					outerColor={outerColor}
					className={`TESpinnerRing TESpinnerRing${i + 1}`}
				/>
			)
		}
		return rings
	}

	const { size = 'medium', className = '' } = props

	return (
		<Container className={`TESpinner ${className}`}>
			<SpinnerWrapper size={size} className='TESpinnerContainer'>
				{renderRings()}
			</SpinnerWrapper>
		</Container>
	)
}

TESpinner.propTypes = {
	size: PropTypes.string,
	innerColor: PropTypes.string,
	outerColor: PropTypes.string,
}

export default TESpinner
