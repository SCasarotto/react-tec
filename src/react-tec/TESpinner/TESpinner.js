//
//TE Version 0.1.0
//

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Radium from 'radium'

import { colorBetweenColors } from './../../helpers'
import { colors } from './../../config/styles'
import styles from './styles'

class TESpinner extends Component {
    calculateRingStyles = (totalRings, ringNumber) => {
        const { innerColor = colors.white, outerColor = colors.primary } = this.props

        const maxTime = 3
        const minTime = 1

        const stepPercent = 1 / totalRings / 2
        const colorSteps = 1 / (totalRings - 1)

        const spacing = ringNumber * stepPercent
        const timeStep = (maxTime - minTime) / totalRings
        const thisTime = maxTime / (maxTime - timeStep * ringNumber)

        return {
            left: `${spacing * 100}%`,
            top: `${spacing * 100}%`,
            width: `${(1 - spacing * 2) * 100}%`,
            height: `${(1 - spacing * 2) * 100}%`,
            borderTopColor: colorBetweenColors(innerColor, outerColor, colorSteps * ringNumber),
            animation: `loading ${thisTime}s linear infinite`,
        }
    }
    renderRings = () => {
        const { size } = this.props
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
                <div
                    key={`ring${i}`}
                    style={[styles.ring, this.calculateRingStyles(totalRings, i)]}
                />
            )
        }
        return rings
    }

    render() {
        const { wrapperStyle, spinnerStyle, size } = this.props

        return (
            <div style={{ ...styles.spinnerWrapper, ...wrapperStyle }}>
                <div style={{ ...styles.spinner(size), ...spinnerStyle }}>{this.renderRings()}</div>
            </div>
        )
    }
}

TESpinner.propTypes = {}

export default Radium(TESpinner)
