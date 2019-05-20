import styled from 'styled-components'

const colorBetweenColors = (color1, color2, percBetween) => {
	var hex = function(x) {
		x = x.toString(16)
		return x.length === 1 ? '0' + x : x
	}
	const color1RGB = hexToRgb(color1)
	const color2RGB = hexToRgb(color2)

	const r = Math.ceil(color1RGB.r * percBetween + color2RGB.r * (1 - percBetween))
	const g = Math.ceil(color1RGB.g * percBetween + color2RGB.g * (1 - percBetween))
	const b = Math.ceil(color1RGB.b * percBetween + color2RGB.b * (1 - percBetween))

	return '#' + hex(r) + hex(g) + hex(b)
}

const hexToRgb = (hex) => {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b
	})

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null
}
const calculateRingStyles = ({ totalRings, ringNumber, innerColor, outerColor }) => {
	const maxTime = 3
	const minTime = 1

	const stepPercent = 1 / totalRings / 2
	const colorSteps = 1 / (totalRings - 1)

	const spacing = ringNumber * stepPercent
	const timeStep = (maxTime - minTime) / totalRings
	const thisTime = maxTime / (maxTime - timeStep * ringNumber)

	return `
        left: ${spacing * 100}%;
        top: ${spacing * 100}%;
        width: ${(1 - spacing * 2) * 100}%;
        height: ${(1 - spacing * 2) * 100}%;
        border-top-color: ${colorBetweenColors(innerColor, outerColor, colorSteps * ringNumber)};
        animation: TESpinnerLoading ${thisTime}s linear infinite;
    `
}

export const Container = styled.div`
	${(props) => {
		return `
			text-align: center;
		`
	}}
`
export const SpinnerWrapper = styled.div`
	${(props) => {
		const { size } = props

		let width = 80
		let height = 80
		switch (size) {
			case 'small':
				width = 40
				height = 40
				break
			case 'medium':
				width = 60
				height = 60
				break
			case 'large':
				width = 80
				height = 80
				break
			default:
				break
		}

		return `
		    position: relative;
		    width: ${width}px;
		    height: ${height}px;
		    display: inline-block;
		`
	}}
`
export const Ring = styled.div`
	${(props) => {
		const { theme, ringNumber, totalRings, innerColor, outerColor } = props

		let styles = `
		    position: absolute;
		    border-radius: 50%;
		    overflow: hidden;
		    border-top: 3px solid transparent;
		    border-right: 1px solid transparent;
		    border-bottom: 1px solid transparent;
		    border-left: 1px solid transparent;
		`

		styles += calculateRingStyles({
			ringNumber,
			totalRings,
			innerColor: innerColor || theme.white,
			outerColor: outerColor || theme.primary,
		})

		return styles
	}}
`

//import { colors } from './../../config/styles';

export default {
	ring: {
		position: 'absolute',
		borderRadius: '50%',
		overflow: 'hidden',
		borderTop: '3px solid transparent',
		borderRight: '1px solid transparent',
		borderBottom: '1px solid transparent',
		borderLeft: '1px solid transparent',
	},
}
