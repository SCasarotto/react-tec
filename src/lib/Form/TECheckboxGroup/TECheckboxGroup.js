//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import TELabel from './../TELabel'

import { Container, InputWrapper, RowWrarpper, Checkbox, Label } from './styledComponents'

const manipulateRowData = ({ rowData, labelForKey = '' }) => {
    //Allowing For Greater Shorthand
    if (typeof rowData === 'string') {
        const label = rowData
        const value = rowData
        const key = labelForKey + rowData
        return { label, value, key }
    } else if (typeof rowData === 'object') {
        let { label, value: value = label, key: key = labelForKey + label } = rowData
        return { label, value, key }
    }
}
const TECheckboxGroup = (props) => {
    const handleInputChange = (event) => {
        const { checkedValues, onChange } = props
        const { value, id } = event.target

        let newValues = [...checkedValues]
        if (checkedValues) {
            if (checkedValues.includes(value)) {
                newValues = newValues.filter((e) => e !== value)
            } else {
                newValues.push(value)
            }
        }
        onChange(newValues, id)
    }

    const {
        size,
        last,
        title,
        required,
        rowSize,
        disabled,
        checkedValues,
        buttonArray,
        labelForKey,
    } = props

    return (
        <Container size={size} last={last}>
            <TELabel disabled={disabled} required={required}>
                {title}
            </TELabel>
            <InputWrapper>
                {buttonArray &&
                    buttonArray.map((rowData) => {
                        const { label, value, key } = manipulateRowData({
                            rowData,
                            labelForKey,
                        })

                        return (
                            <RowWrarpper key={key} size={rowSize}>
                                <Checkbox
                                    value={value}
                                    onChange={handleInputChange}
                                    id={key}
                                    checked={checkedValues && checkedValues.includes(value)}
                                    disabled={disabled}
                                />
                                <Label htmlFor={key} disabled={disabled}>
                                    {label}
                                </Label>
                            </RowWrarpper>
                        )
                    })}
            </InputWrapper>
        </Container>
    )
}

TECheckboxGroup.propTypes = {
    scrolling: PropTypes.bool,
    buttonArray: PropTypes.array.isRequired,
    checkedValues: PropTypes.array.isRequired,
    labelForKey: PropTypes.string,
}

TECheckboxGroup.defaultProps = {
    scrolling: false,
}

export default TECheckboxGroup
