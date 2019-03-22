import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

// import {
// 	TETextarea,
// } from 'react-tec'

import TEButtonSection from './TEButtonSection'
import TECheckboxGroupSection from './TECheckboxGroupSection'
import TECheckboxInputSection from './TECheckboxInputSection'
import TEDatetimeInputSection from './TEDatetimeInputSection'
import TEDatetimeRowSection from './TEDatetimeRowSection'
import TEFileInputSection from './TEFileInputSection'
import TEFileManagerRowSection from './TEFileManagerRowSection'
import TEFileRowSection from './TEFileRowSection'
import TEFormSection from './TEFormSection'
import TEImageRowSection from './TEImageRowSection'
import TEInputRowSection from './TEInputRowSection'
import TEInputSection from './TEInputSection'
import TELabelSection from './TELabelSection'
import TEMultiStepFormSection from './TEMultiStepFormSection'
import TERadioButtonGroupSection from './TERadioButtonGroupSection'
import TERadioButtonInputSection from './TERadioButtonInputSection'
import TERowSection from './TERowSection'
import TESearchSelectInputSection from './TESearchSelectInputSection'
import TESearchSelectRowSection from './TESearchSelectRowSection'
import TESegmentedGroupSection from './TESegmentedGroupSection'
import TETextareaSection from './TETextareaSection'

const Form = (props) => {
	useBarTitle('Components - Form')

	return (
		<Fragment>
			<TEHelmet
				title="React TEC | Components - Form"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel>
					<h1>Form</h1>
					<TEButtonSection />
					<TECheckboxGroupSection />
					<TECheckboxInputSection />
					<TEDatetimeInputSection />
					<TEDatetimeRowSection />
					<TEFileInputSection />
					<TEFileManagerRowSection />
					<TEFileRowSection />
					<TEFormSection />
					<TEImageRowSection />
					<TEInputRowSection />
					<TEInputSection />
					<TELabelSection />
					<TEMultiStepFormSection />
					<TERadioButtonGroupSection />
					<TERadioButtonInputSection />
					<TERowSection />
					<TESearchSelectInputSection />
					<TESearchSelectRowSection />
					<TESegmentedGroupSection />
					<TETextareaSection />
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Form
