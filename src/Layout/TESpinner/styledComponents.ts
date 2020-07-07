import styled from 'styled-components'

import { colorBetweenColors } from './../../helpers'

interface calculateRingStyles {
	totalRings: number
	ringNumber: number
	innerColor: string
	outerColor: string
}
const calculateRingStyles = ({
	totalRings,
	ringNumber,
	innerColor,
	outerColor,
}: calculateRingStyles) => {
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
	text-align: center;
`
export const SpinnerWrapper = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
	position: relative;
	display: inline-block;
	${(props) => {
		const { size } = props

		switch (size) {
			case 'small':
				return `
					width: 40px;
					height: 40px;
				`
			case 'medium':
				return `
					width: 60px;
					height: 60px;
				`
			case 'large':
				return `
					width: 80px;
					height: 80px;
				`
			default:
				return `
					width: 80px;
					height: 80px;
				`
		}
	}}
`
export const Ring = styled.div<{
	totalRings: number
	ringNumber: number
	innerColor?: string
	outerColor?: string
}>`
	position: absolute;
	border-radius: 50%;
	overflow: hidden;
	border-top: 3px solid transparent;
	border-right: 1px solid transparent;
	border-bottom: 1px solid transparent;
	border-left: 1px solid transparent;

	${(props) => {
		const { theme, ringNumber, totalRings, innerColor, outerColor } = props
		return calculateRingStyles({
			ringNumber,
			totalRings,
			innerColor: innerColor || (theme.white ?? '#ffffff'),
			outerColor: outerColor || (theme.primary ?? '#000000'),
		})
	}}
`
