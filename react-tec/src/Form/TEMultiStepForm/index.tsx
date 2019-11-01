//
// NOTES:
//
// 10-11-18 SC
// - May be able to be improved by moving to a render prop form but seems fine for now.
// - Could also improve by adding react-transition-group around each step
//

import React, { useState } from 'react'

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

export interface TEMultiStepFormStepData {
	title: string
	component: React.ReactNode
	onPrevious?(): Promise<any>
	onNext?(): Promise<any>
}
export interface TEMultiStepFormProps {
	className?: string
	handleCancelOnClick?(): void
	stepData: TEMultiStepFormStepData[]
	roundedButtons: boolean
	onSubmit(): Promise<any>
	onStepChange?(step: number): void
}
const TEMultiStepForm: React.FC<TEMultiStepFormProps> = (props) => {
	const [currentStep, setCurrentStep] = useState(0)

	const updateAndEmitStep = (step: number) => {
		const { onStepChange } = props
		setCurrentStep(step)
		if (onStepChange) {
			onStepChange(step)
		}
	}
	const handlePreviousPressed = async () => {
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

		try {
			const onPrevious =
				stepData &&
				stepData[currentStep] &&
				stepData[currentStep].onPrevious
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
		const { onSubmit, stepData } = props

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
			const onNext =
				stepData &&
				stepData[currentStep] &&
				stepData[currentStep].onNext
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

	const {
		className = '',
		handleCancelOnClick,
		stepData,
		// roundedButtons,
	} = props
	if (!stepData || (stepData && stepData.length === 0)) {
		return null
	}

	return (
		<Container className={`TEMultiStepForm ${className}`}>
			<StepContainer className="TEMultiStepFormStepContainer">
				<StepBar
					stepCount={stepData.length}
					className="TEMultiStepFormStepBar"
				/>
				{stepData.map((step, index) => {
					const { title } = step

					return (
						<StepWrapper
							key={index}
							stepCount={stepData.length}
							className="TEMultiStepFormStepWrapper">
							<StepNumber
								active={currentStep === index}
								className="TEMultiStepFormStepNumber">
								{index + 1}
							</StepNumber>
							<StepTitle className="TEMultiStepFormStepTitle">
								{title}
							</StepTitle>
						</StepWrapper>
					)
				})}
			</StepContainer>
			<Form className="TEMultiStepFormForm">
				{stepData[currentStep] && stepData[currentStep].component}
			</Form>
			<ButtonContainer className="TEMultiStepFormButtonContainer">
				{(handleCancelOnClick || currentStep > 0) && (
					<StepButton
						onClick={handlePreviousPressed}
						// position="left"
						// rounded={roundedButtons}
						className="TEMultiStepFormStepButton TEMultiStepFormStepButtonLeft">
						{currentStep === 0 ? 'cancel' : 'previous'}
					</StepButton>
				)}
				<StepButton
					onClick={handleNextPressed}
					// position="right"
					// rounded={roundedButtons}
					// singleButton={!handleCancelOnClick && currentStep === 0}
					className="TEMultiStepFormStepButton TEMultiStepFormStepButtonright">
					{currentStep + 1 === stepData.length ? 'submit' : 'next'}
				</StepButton>
			</ButtonContainer>
		</Container>
	)
}

export default TEMultiStepForm
