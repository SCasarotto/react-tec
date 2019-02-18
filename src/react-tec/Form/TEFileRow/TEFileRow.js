//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TEFileInput from './../TEFileInput'

//import styles from './styles'

class TEFileRow extends Component {
    handleFileClick = (event) => {
        event.target.value = null
    }

    render() {
        const {
            //Row
            rowStyles,
            size,
            last,

            //Label
            labelStyles,
            title,

            //Input
            inputStyles,
            onChange,
            accept,
            multiple,
            disabled,

            //Both
            required,
            labelForKey,

            ...rest
        } = this.props

        return (
            <TERow size={size} last={last} style={rowStyles}>
                <TELabel
                    htmlFor={labelForKey}
                    labelText={title}
                    style={labelStyles}
                    required={required}
                    disabled={disabled}
                />
                <TEFileInput
                    onChange={onChange}
                    accept={accept}
                    onClick={this.handleFileClick}
                    id={labelForKey}
                    multiple={multiple}
                    disabled={disabled}
                    style={inputStyles}
                    {...rest}
                />
            </TERow>
        )
    }
}

TEFileRow.propTypes = {
    //Row
    rowStyles: PropTypes.object,
    size: PropTypes.string,
    last: PropTypes.bool,

    //Input
    inputStyles: PropTypes.object,
    onChange: PropTypes.func,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    onChangeKey: PropTypes.string,
    disabled: PropTypes.bool,

    //Both
    labelForKey: PropTypes.string,
}

TEFileRow.defaultProps = {}

export default Radium(TEFileRow)
