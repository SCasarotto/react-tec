//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { PowerSelect, PowerSelectMultiple } from 'react-power-select'

import TERow from './../TERow'
import TELabel from './../TELabel'

//import styles from './styles'

class TESearchSelectRow extends Component {
    render() {
        const {
            //Row
            rowStyles,
            size,
            last,

            //Label
            title,
            labelStyles,
            disabled,

            //Input
            type,
            className,
            options,
            onChange,
            required,
            placeholder,
            optionComponent,
            selectedOptionComponent,
            optionLabelPath,
            searchEnabled,

            //Both
            value,
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
				{type === 'default' &&
					<PowerSelect
						options={options}
						selected={value}
						onChange={onChange}
						placeholder={placeholder}
	          			optionComponent={optionComponent}
	          			selectedOptionComponent={selectedOptionComponent}
	          			optionLabelPath={optionLabelPath}
	          			searchEnabled={searchEnabled}
						id={labelForKey}
						disabled={disabled}
						className={className}
						{...rest}
					/>
				}
				{type === 'multi' &&
					<PowerSelectMultiple
						options={options}
						selected={value}
						onChange={onChange}
						placeholder={placeholder}
	          			optionComponent={optionComponent}
	          			selectedOptionComponent={selectedOptionComponent}
	          			optionLabelPath={optionLabelPath}
	          			searchEnabled={searchEnabled}
						id={labelForKey}
						disabled={disabled}
						className={className}
						{...rest}
					/>
				}
			</TERow>
        )
    }
}

TESearchSelectRow.propTypes = {
    //Row
    rowStyles: PropTypes.object,
    size: PropTypes.string,
    last: PropTypes.bool,

    //Input
    type: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onChangeKey: PropTypes.string,

    //Both
    rowData: PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
            PropTypes.object,
            PropTypes.array,
        ]),
        validLabel: PropTypes.string.isRequired,
        valid: PropTypes.bool.isRequired,
    }),
    labelForKey: PropTypes.string,
}

TESearchSelectRow.defaultProps = {
    type: 'default',
    searchEnabled: true
}

export default Radium(TESearchSelectRow)