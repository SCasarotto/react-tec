//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TERadioButtonInput from './../TERadioButtonInput'

import styles from './styles'

class TESegmentedGroup extends Component {
    manipulateRowData({ rowData, labelForKey = '' }) {
        //Allowing For Greater Shorthand
        if (typeof rowData === 'string') {
            const label = rowData
            const value = rowData
            const key = labelForKey + rowData
            return { label, value, key }
        } else if (typeof rowData === 'object') {
            let {
                label,
                value: value = label,
                key: key = labelForKey + label,
            } = rowData
            return { label, value, key }
        }
        return rowData
    }

    render() {
        const {
            title,
            onChange,
            checkedValue,
            buttonArray,
            labelForKey,
            required,
            inline,
            disabled,
            size,

            rowStyles,
            titleStyles,
            groupContainerStyles,
            labelWrapperStyles,
            labelStyles,
        } = this.props

        return (
            <TERow size={size} style={{ ...styles.row(inline), ...rowStyles }}>
				<TELabel
					labelText={title}
					style={{ ...styles.title(inline), ...titleStyles }}
					required={required}
					disabled={disabled}
				/>
				<div style={{ ...styles.segmentedContainer(inline), ...groupContainerStyles }}>
					{buttonArray && buttonArray.map((rowData, index) => {
						const { label, value, key } = this.manipulateRowData({rowData, labelForKey})

						return (
							<div key={key} style={{ ...styles.labelWrapper, ...labelWrapperStyles }}>
								<TERadioButtonInput
									value={value}
									onChange={onChange}
									style={styles.input}
									id={key}
									checked={checkedValue === value}
									disabled={disabled}
								/>
								<label
									htmlFor={key}
									key={key}
									style={{
										...styles.label(index === 0, index+1 === buttonArray.length, checkedValue === value, disabled),
										...labelStyles && labelStyles(index === 0, index+1 === buttonArray.length, checkedValue === value, disabled)
									}}
								>
									{label}
								</label>
							</div>
						)
					})}
				</div>
			</TERow>
        )
    }
}

TESegmentedGroup.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    inline: PropTypes.bool,
    labelStyles: PropTypes.func,
}

TESegmentedGroup.defaultProps = {}

export default Radium(TESegmentedGroup)