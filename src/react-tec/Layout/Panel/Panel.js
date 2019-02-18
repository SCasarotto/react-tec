//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'

import PanelTitle from './../PanelTitle'

import styles from './styles'

class Panel extends Component {
    render() {
        const {
            size,
            containerStyle,

            barStyle,
            title,
            titleStyle,
            leftComponent,
            subtitle,
            rightComponent,

            children,
        } = this.props
        return (
            <div style={{ ...styles.container(size), ...containerStyle }}>
                {(title || leftComponent || subtitle || rightComponent) && (
                    <PanelTitle
                        barStyle={barStyle}
                        titleStyle={titleStyle}
                        title={title}
                        leftComponent={leftComponent}
                        subtitle={subtitle}
                        rightComponent={rightComponent}
                    />
                )}
                {children}
            </div>
        )
    }
}

Panel.propTypes = {}

Panel.defaultProps = {
    size: 'full',
}

export default Radium(Panel)
