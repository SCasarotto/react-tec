//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import TELabel from './../TELabel'

import { Container, InputWrapper, RowWrarpper, RadioButton, Label } from './styledComponents'

const TERadioButtonGroup = (props) => {
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
        return rowData
    }

    const {
        size,
        last,
        title,
        onChange,
        checkedValue,
        buttonArray,
        labelForKey,
        disabled,
        required,
        rowSize,
    } = props

    return (
        <Container size={size} last={last}>
            <TELabel disabled={disabled} required={required}>
                {title}
            </TELabel>
            <InputWrapper>
                {buttonArray &&
                    buttonArray.map((rowData) => {
                        const { label, value, key } = manipulateRowData({ rowData, labelForKey })

                        return (
                            <RowWrarpper key={key} size={rowSize}>
                                <RadioButton
                                    value={value}
                                    onChange={onChange}
                                    id={key}
                                    checked={checkedValue === value}
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

TERadioButtonGroup.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    labelForKey: PropTypes.string,
}

export default TERadioButtonGroup
