//
// NOTES:
//
// 10-11-18 SC
// - May be able to be improved by moving to a render prop form but seems fine for now.
// - Could also improve by adding react-transition-group around each step
//

import React, { useState } from 'react'

import { TEForm } from '../TEForm'

import {
	Container,
	StepContainer,
	StepBar,
	StepWrapper,
	StepNumber,
	StepTitle,
	ButtonContainer,
	StepButton,
} from './styledComponents'

export interface TEMultiStepFormStepData {
	title: string
	component: React.ReactNode
	// TODO: Try to make these types better
	onPrevious?(): Promise<any>
	onNext?(): Promise<any>
}
export interface TEMultiStepFormProps {
	className?: string
	handleCancelOnClick?(): void
	stepData: TEMultiStepFormStepData[]
	// roundedButtons?: boolean
	// TODO: Try to make these types better
	onSubmit(): Promise<any>
	onStepChange?(step: number): void
	submitButtonId?: string
}
/**
 *
 * Multiple step form container. `TEMultiStepForm` provides a quick and easy way to break a form into multiple parts and present the user with one part at a time.
 *
 */
export const TEMultiStepForm = React.forwardRef<HTMLFormElement, TEMultiStepFormProps>(
	(props, ref) => {
		const {
			className = '',
			handleCancelOnClick,
			stepData,
			// roundedButtons,
			submitButtonId,
			onStepChange,
			onSubmit,
		} = props
		const stepCount = stepData?.length ?? 0

		const [currentStep, setCurrentStep] = useState(0)

		const updateAndEmitStep = (step: number) => {
			setCurrentStep(step)
			if (onStepChange) {
				onStepChange(step)
			}
		}
		const handlePreviousPressed = async () => {
			const moveBack = () => {
				if (currentStep === 0) {
					if (handleCancelOnClick) {
						handleCancelOnClick()
					}
				} else {
					updateAndEmitStep(currentStep - 1)
				}
			}

			try {
				const onPrevious = stepData && stepData?.[currentStep]?.onPrevious
				if (onPrevious) {
					await onPrevious()
					moveBack()
				} else {
					moveBack()
				}
			} catch (e) {
				console.log(e)
			}
		}
		const handleNextPressed = async () => {
			const moveForward = async () => {
				try {
					if (currentStep + 1 === stepData.length) {
						await onSubmit()
						updateAndEmitStep(0)
					} else {
						updateAndEmitStep(currentStep + 1)
					}
				} catch (e) {
					console.log(e)
				}
			}
			try {
				const onNext = stepData && stepData?.[currentStep]?.onNext
				if (onNext) {
					await onNext()
					moveForward()
				} else {
					moveForward()
				}
			} catch (e) {
				console.log(e)
			}
		}

		return (
			<Container className={`TEMultiStepForm ${className}`}>
				<StepContainer className='TEMultiStepFormStepContainer'>
					<StepBar stepCount={stepCount} className='TEMultiStepFormStepBar' />
					{stepData &&
						stepData.map((step, index) => {
							const { title } = step

							return (
								<StepWrapper
									key={index}
									stepCount={stepCount}
									className='TEMultiStepFormStepWrapper'
								>
									<StepNumber
										active={currentStep === index}
										className='TEMultiStepFormStepNumber'
									>
										{index + 1}
									</StepNumber>
									<StepTitle className='TEMultiStepFormStepTitle'>
										{title}
									</StepTitle>
								</StepWrapper>
							)
						})}
				</StepContainer>
				<TEForm className='TEMultiStepFormForm' ref={ref}>
					{stepData && stepData.length > 0 && stepData?.[currentStep]?.component}
					<ButtonContainer className='TEMultiStepFormButtonContainer'>
						{(handleCancelOnClick || currentStep > 0) && (
							<StepButton
								onClick={handlePreviousPressed}
								// position="left"
								// rounded={roundedButtons}
								className='TEMultiStepFormStepButton TEMultiStepFormStepButtonLeft'
							>
								{currentStep === 0 ? 'cancel' : 'previous'}
							</StepButton>
						)}
						<StepButton
							onClick={handleNextPressed}
							// position="right"
							// rounded={roundedButtons}
							// singleButton={!handleCancelOnClick && currentStep === 0}
							className='TEMultiStepFormStepButton TEMultiStepFormStepButtonright'
							id={submitButtonId}
						>
							{currentStep + 1 === stepCount ? 'submit' : 'next'}
						</StepButton>
					</ButtonContainer>
				</TEForm>
			</Container>
		)
	},
)
