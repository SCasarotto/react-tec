//
//TE Version 0.3.0
//

//
// NOTES:
//
// 10-11-18 SC
// - May be able to be improved by moving to a render prop form but seems fine for now.
// - Could also improve by adding react-transition-group around each step
//

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    StepContainer,
    StepBar,
    StepWrapper,
    StepNumber,
    StepTitle,
    Form,
    ButtonContainer,
    StepButton,
} from './styledComponents'

const TEMultiStepForm = (props) => {
    const [currentStep, setCurrentStep] = useState(0)

    const updateAndEmitStep = (step) => {
        const { onStepChange } = props
        setCurrentStep(step)
        if (onStepChange) {
            onStepChange(step)
        }
    }
    const handlePreviousPressed = () => {
        const { handleCancelOnClick, stepData } = props

        const moveBack = () => {
            if (currentStep === 0) {
                if (handleCancelOnClick) {
                    handleCancelOnClick()
                }
            } else {
                updateAndEmitStep(currentStep - 1)
            }
        }

        if (stepData && stepData[currentStep] && stepData[currentStep].onPrevious) {
            stepData[currentStep]
                .onPrevious()
                .then(() => moveBack())
                .catch((error) => console.log(error))
        } else {
            moveBack()
        }
    }
    const handleNextPressed = () => {
        const { onSubmit, stepData } = props

        const moveForward = () => {
            if (currentStep + 1 === stepData.length) {
                onSubmit()
                    .then(() => {
                        updateAndEmitStep(0)
                    })
                    .catch((error) => console.log(error))
            } else {
                updateAndEmitStep(currentStep + 1)
            }
        }

        if (stepData && stepData[currentStep] && stepData[currentStep].onNext) {
            stepData[currentStep]
                .onNext()
                .then(() => moveForward())
                .catch((error) => console.log(error))
        } else {
            moveForward()
        }
    }

    const { className, handleCancelOnClick, stepData, roundedButtons } = props
    if (!stepData || (stepData && stepData.length === 0)) {
        return null
    }

    return (
        <Container className={className}>
            <StepContainer>
                <StepBar stepCount={stepData.length} />
                {stepData.map((step, index) => {
                    const { title } = step

                    return (
                        <StepWrapper key={index} stepCount={stepData.length}>
                            <StepNumber active={currentStep === index}>{index + 1}</StepNumber>
                            <StepTitle>{title}</StepTitle>
                        </StepWrapper>
                    )
                })}
            </StepContainer>
            <Form>{stepData[currentStep] && stepData[currentStep].component}</Form>
            <ButtonContainer>
                {(handleCancelOnClick || currentStep > 0) && (
                    <StepButton
                        onClick={handlePreviousPressed}
                        position="left"
                        rounded={roundedButtons}
                    >
                        {currentStep === 0 ? 'cancel' : 'previous'}
                    </StepButton>
                )}
                <StepButton
                    onClick={handleNextPressed}
                    position="right"
                    rounded={roundedButtons}
                    singleButton={!handleCancelOnClick && currentStep === 0}
                >
                    {currentStep + 1 === stepData.length ? 'submit' : 'next'}
                </StepButton>
            </ButtonContainer>
        </Container>
    )
}

TEMultiStepForm.propTypes = {
    onStepChange: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    stepData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            component: PropTypes.element,
            onPrevious: PropTypes.func,
            onNext: PropTypes.func,
        }).isRequired
    ).isRequired,
    roundedButtons: PropTypes.bool,
}

export default TEMultiStepForm
